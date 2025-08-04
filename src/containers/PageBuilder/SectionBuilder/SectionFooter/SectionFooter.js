import React from 'react';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import { LinkedLogo, FieldTextInput, Button, Form } from '../../../../components';
import { FormattedMessage } from '../../../../util/reactIntl';
import * as validators from '../../../../util/validators';

import Field from '../../Field';
import BlockBuilder from '../../BlockBuilder';

import SectionContainer from '../SectionContainer';
import css from './SectionFooter.module.css';

// The number of columns (numberOfColumns) affects styling
const GRID_CONFIG = [
  { contentCss: css.contentCol1, gridCss: css.gridCol1 },
  { contentCss: css.contentCol2, gridCss: css.gridCol2 },
  { contentCss: css.contentCol3, gridCss: css.gridCol3 },
  { contentCss: css.contentCol4, gridCss: css.gridCol4 },
];
const MAX_MOBILE_SCREEN_WIDTH = 1024;

const getIndex = numberOfColumns => numberOfColumns - 1;

const getContentCss = numberOfColumns => {
  const contentConfig = GRID_CONFIG[getIndex(numberOfColumns)];
  return contentConfig ? contentConfig.contentCss : GRID_CONFIG[0].contentCss;
};

const getGridCss = numberOfColumns => {
  const contentConfig = GRID_CONFIG[getIndex(numberOfColumns)];
  return contentConfig ? contentConfig.gridCss : GRID_CONFIG[0].gridCss;
};

/**
 * @typedef {Object} SocialMediaLinkConfig
 * @property {'socialMediaLink'} fieldType
 * @property {string} platform
 * @property {string} url
 */

/**
 * @typedef {Object} BlockConfig
 * @property {string} blockId
 * @property {string} blockName
 * @property {'defaultBlock' | 'footerBlock' | 'socialMediaLink'} blockType
 */

/**
 * @typedef {Object} FieldComponentConfig
 * @property {ReactNode} component
 * @property {Function} pickValidProps
 */

/**
 * Section component that's able to show blocks in multiple different columns (defined by "numberOfColumns" prop)
 *
 * @component
 * @param {Object} props
 * @param {string?} props.className add more style rules in addition to components own css.root
 * @param {string?} props.rootClassName overwrite components own css.root
 * @param {string} props.sectionId id of the section
 * @param {'footer'} props.sectionType
 * @param {number} props.numberOfColumns columns for blocks in footer (1-4)
 * @param {Array<SocialMediaLinkConfig>?} props.socialMediaLinks array of social media link configs
 * @param {Object?} props.slogan
 * @param {Object?} props.copyright
 * @param {Object?} props.appearance
 * @param {Array<BlockConfig>?} props.blocks array of block configs
 * @param {Object} props.options extra options for the section component (e.g. custom fieldComponents)
 * @param {Object<string,FieldComponentConfig>?} props.options.fieldComponents custom fields
 * @returns {JSX.Element} Section for article content
 */
const SectionFooter = props => {
  const {
    sectionId,
    className,
    rootClassName,
    numberOfColumns = 1,
    socialMediaLinks = [],
    slogan,
    appearance,
    copyright,
    blocks = [],
    options,
    linkLogoToExternalSite,
  } = props;

  // Newsletter subscription handler
  const handleNewsletterSubmit = values => {
    console.log('Newsletter subscription:', values);
    // Add your newsletter subscription logic here
  };

  // If external mapping has been included for fields
  // E.g. { h1: { component: MyAwesomeHeader } }
  const fieldComponents = options?.fieldComponents;
  const fieldOptions = { fieldComponents };
  const linksWithBlockId = socialMediaLinks?.map(sml => {
    return {
      ...sml,
      blockId: sml.link.platform,
    };
  });

  const showSocialMediaLinks = socialMediaLinks?.length > 0;
  const hasMatchMedia = typeof window !== 'undefined' && window?.matchMedia;
  const isMobileLayout = hasMatchMedia
    ? window.matchMedia(`(max-width: ${MAX_MOBILE_SCREEN_WIDTH}px)`)?.matches
    : true;
  const logoLayout = isMobileLayout ? 'mobile' : 'desktop';

  // Newsletter form validation
  const emailRequired = validators.required('Email is required');
  const emailValid = validators.emailFormatValid('Please enter a valid email address');

  return (
    <SectionContainer
      as="footer"
      id={sectionId}
      className={className || css.root}
      rootClassName={rootClassName}
      appearance={appearance}
      options={fieldOptions}
    >
      <div className={css.footer}>
        {/* Newsletter Section */}
        <div className={css.newsletterSection}>
          <h3 className={css.newsletterTitle}>Stay Updated</h3>
          <FinalForm
            onSubmit={handleNewsletterSubmit}
            render={({ handleSubmit, submitting }) => (
              <Form onSubmit={handleSubmit} className={css.newsletterForm}>
                <div className={css.emailInputContainer}>
                  <FieldTextInput
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className={css.emailInput}
                  // validate={validators.composeValidators(emailRequired, emailValid)}
                  />
                  <Button type="submit" disabled={submitting} rootClassName={css.subscribeButton}>
                    Subscribe Now
                  </Button>
                </div>
              </Form>
            )}
          />
        </div>

        {/* Main Grid Section */}
        <div className={css.mainGrid}>
          {/* Logo Column */}
          <div className={css.logoColumn}>
            <LinkedLogo
              rootClassName={css.logoLink}
              logoClassName={css.logoWrapper}
              logoImageClassName={css.logoImage}
              linkToExternalSite={linkLogoToExternalSite}
              layout={logoLayout}
            />
          </div>

          {/* Categories Column */}
          <div className={css.linkColumn}>
            <h4 className={css.columnTitle}>Categories</h4>
            <ul className={css.linkList}>
              <li>
                <a href="#" className={css.footerLink}>
                  Booth Design
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Audio Visual
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Lighting
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Printing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className={css.linkColumn}>
            <h4 className={css.columnTitle}>Quick Links</h4>
            <ul className={css.linkList}>
              <li>
                <a href="#" className={css.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className={css.footerLink}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className={css.contactColumn}>
            <div className={css.contactInfo}>
              <div className={css.contactItem}>
                <span className={css.contactIcon}>📧</span>
                <span className={css.contactText}>Info@Standify.com</span>
              </div>
              <div className={css.contactItem}>
                <span className={css.contactIcon}>📞</span>
                <span className={css.contactText}>+2349069591656</span>
              </div>
            </div>

            {showSocialMediaLinks && (
              <div className={css.socialMedia}>
                <BlockBuilder blocks={linksWithBlockId} sectionId={sectionId} options={options} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={css.copyrightSection}>
        <Field data={copyright} className={css.copyright} />
        {!copyright && <p className={css.copyright}>© 2025, Elitetech.</p>}
      </div>
    </SectionContainer>
  );
};

export default SectionFooter;
