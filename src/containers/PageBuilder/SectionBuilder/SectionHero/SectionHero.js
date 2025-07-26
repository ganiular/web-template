import React from 'react';
import classNames from 'classnames';

import { NamedLink } from '../../../../components';
import SectionContainer from '../SectionContainer';
import css from './SectionHero.module.css';

/**
 * @typedef {Object} FieldComponentConfig
 * @property {ReactNode} component
 * @property {Function} pickValidProps
 */

/**
 * Section component for a website's hero section
 * The Section Hero doesn't have any Blocks by default, all the configurations are made in the Section Hero settings
 *
 * @component
 * @param {Object} props
 * @param {string?} props.className add more style rules in addition to components own css.root
 * @param {string?} props.rootClassName overwrite components own css.root
 * @param {Object} props.defaultClasses
 * @param {string} props.defaultClasses.sectionDetails
 * @param {string} props.defaultClasses.title
 * @param {string} props.defaultClasses.description
 * @param {string} props.defaultClasses.ctaButton
 * @param {string} props.sectionId id of the section
 * @param {'hero'} props.sectionType
 * @param {Object?} props.title
 * @param {Object?} props.description
 * @param {Object?} props.appearance
 * @param {Object?} props.callToAction
 * @param {Object} props.options extra options for the section component (e.g. custom fieldComponents)
 * @param {Object<string,FieldComponentConfig>?} props.options.fieldComponents custom fields
 * @returns {JSX.Element} Section for article content
 */
const SectionHero = props => {
  const { sectionId, className, rootClassName, appearance, options } = props;

  return (
    <SectionContainer
      id={sectionId}
      className={className}
      rootClassName={classNames(rootClassName || css.root)}
      appearance={appearance}
      options={options}
    >
      <header className={css.heroContent}>
        <h1 className={css.heroTitle}>Your Exhibition Marketplace for the Middle East</h1>
        <div className={css.heroButtons}>
          <NamedLink name="LandingPage" className={css.heroPrimaryButton}>
            Post Your Project
          </NamedLink>
          <NamedLink name="LandingPage" className={css.heroPrimaryButton}>
            Find Suppliers
          </NamedLink>
        </div>
      </header>
    </SectionContainer>
  );
};

export default SectionHero;
