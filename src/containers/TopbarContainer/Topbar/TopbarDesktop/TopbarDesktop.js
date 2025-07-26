import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { FormattedMessage } from '../../../../util/reactIntl';
import { ACCOUNT_SETTINGS_PAGES } from '../../../../routing/routeConfiguration';
import {
  Avatar,
  InlineTextButton,
  LinkedLogo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
} from '../../../../components';

import TopbarSearchForm from '../TopbarSearchForm/TopbarSearchForm';
import CustomLinksMenu from './CustomLinksMenu/CustomLinksMenu';

import css from './TopbarDesktop.module.css';

const SignupLink = () => {
  return (
    <NamedLink name="SignupPage" className={css.topbarLink}>
      <span className={css.topbarLinkLabel}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );
};

const LoginLink = () => {
  return (
    <NamedLink name="LoginPage" className={css.topbarLink}>
      <span className={css.topbarLinkLabel}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  );
};

const InboxLink = ({ notificationCount, inboxTab }) => {
  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;
  return (
    <NamedLink className={css.topbarLink} name="InboxPage" params={{ tab: inboxTab }}>
      <span className={css.topbarLinkLabel}>
        <FormattedMessage id="TopbarDesktop.inbox" />
        {notificationDot}
      </span>
    </NamedLink>
  );
};

const ProfileMenu = ({ currentPage, currentUser, onLogout, showManageListingsLink }) => {
  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  return (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <Avatar className={css.avatar} user={currentUser} disableProfileLink />
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        {showManageListingsLink ? (
          <MenuItem key="ManageListingsPage">
            <NamedLink
              className={classNames(css.menuLink, currentPageClass('ManageListingsPage'))}
              name="ManageListingsPage"
            >
              <span className={css.menuItemBorder} />
              <FormattedMessage id="TopbarDesktop.yourListingsLink" />
            </NamedLink>
          </MenuItem>
        ) : null}
        <MenuItem key="ProfileSettingsPage">
          <NamedLink
            className={classNames(css.menuLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.menuLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};

/**
 * Topbar for desktop layout
 *
 * @component
 * @param {Object} props
 * @param {string?} props.className add more style rules in addition to components own css.root
 * @param {string?} props.rootClassName overwrite components own css.root
 * @param {CurrentUser} props.currentUser API entity
 * @param {string?} props.currentPage
 * @param {boolean} props.isAuthenticated
 * @param {number} props.notificationCount
 * @param {Function} props.onLogout
 * @param {Function} props.onSearchSubmit
 * @param {Object?} props.initialSearchFormValues
 * @param {Object} props.intl
 * @param {Object} props.config
 * @param {boolean} props.showSearchForm
 * @param {boolean} props.showCreateListingsLink
 * @param {string} props.inboxTab
 * @returns {JSX.Element} search icon
 */
const TopbarDesktop = props => {
  const {
    className,
    config,
    customLinks,
    currentUser,
    currentPage,
    rootClassName,
    notificationCount = 0,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues = {},
    showSearchForm,
    showCreateListingsLink,
    inboxTab,
  } = props;
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    setMounted(true);
  }, []);

  const marketplaceName = config.marketplaceName;
  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const classes = classNames(rootClassName || css.root, className);

  // Navigation Links with active state
  const getNavLinkClass = linkName => {
    const isActive =
      currentPage === linkName || (linkName === 'LandingPage' && currentPage === 'LandingPage');
    return classNames(css.navLink, { [css.active]: isActive });
  };

  const navigationLinks = (
    <div className={css.navigationLinks}>
      <NamedLink name="LandingPage" className={getNavLinkClass('LandingPage')}>
        <span className={css.navLinkLabel}>Home</span>
      </NamedLink>
      <NamedLink name="LandingPage" className={getNavLinkClass('SearchPage')}>
        <span className={css.navLinkLabel}>Marketplace</span>
      </NamedLink>
      <NamedLink name="LandingPage" className={getNavLinkClass('NewListingPage')}>
        <span className={css.navLinkLabel}>Post Project</span>
      </NamedLink>
    </div>
  );

  // Language Selector Component
  const LanguageSelector = () => (
    <button className={css.languageSelector}>
      <span className={css.globeIcon}>🌐</span>
      <span className={css.languageText}>{currentLanguage}</span>
      <span className={css.languageTextMobile}>EN</span>
      <span className={css.chevronIcon}>▼</span>
    </button>
  );

  // Theme Toggle Component
  const ThemeToggle = () => (
    <div className={css.themeToggle}>
      <button
        className={classNames(css.themeButton, { [css.active]: !isDarkMode })}
        onClick={() => setIsDarkMode(false)}
      >
        <span className={css.sunIcon}>☀️</span>
      </button>
      <button
        className={classNames(css.themeButton, { [css.active]: isDarkMode })}
        onClick={() => setIsDarkMode(true)}
      >
        <span className={css.moonIcon}>🌙</span>
      </button>
    </div>
  );

  // User Actions Section
  const userActions = (
    <div className={css.userActions}>
      {authenticatedOnClientSide ? (
        <>
          <InboxLink notificationCount={notificationCount} inboxTab={inboxTab} />
          <ProfileMenu
            currentPage={currentPage}
            currentUser={currentUser}
            onLogout={onLogout}
            showManageListingsLink={showCreateListingsLink}
          />
        </>
      ) : (
        <>
          <NamedLink name="LoginPage" className={css.authLink}>
            <span className={css.authLinkLabel}>Login</span>
          </NamedLink>
          <NamedLink name="SignupPage" className={css.authButton}>
            <span className={css.authButtonLabel}>Register</span>
          </NamedLink>
        </>
      )}

      {/* Language and Theme Controls - After auth buttons */}
      <LanguageSelector />
      <ThemeToggle />
    </div>
  );

  return (
    <nav className={classes}>
      <div className={css.leftSection}>
        <LinkedLogo
          className={css.logoLink}
          layout="desktop"
          alt={intl.formatMessage({ id: 'TopbarDesktop.logo' }, { marketplaceName })}
          linkToExternalSite={config?.topbar?.logoLink}
        />
      </div>

      <div className={css.centerSection}>{navigationLinks}</div>

      <div className={css.rightSection}>{userActions}</div>
    </nav>
  );
};

export default TopbarDesktop;
