import React from 'react';
import classNames from 'classnames';

import SectionContainer from '../SectionContainer';
import css from './SectionFeatures.module.css';

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
 * Section component that shows features.
 * Block content are shown in a row-like way:
 * [image] text
 * text [image]
 * [image] text
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
 * @param {'features'} props.sectionType
 * @param {Object?} props.title
 * @param {Object?} props.description
 * @param {Object?} props.appearance
 * @param {Object?} props.callToAction
 * @param {Array<BlockConfig>?} props.blocks array of block configs
 * @param {boolean?} props.isInsideContainer
 * @param {Object} props.options extra options for the section component (e.g. custom fieldComponents)
 * @param {Object<string,FieldComponentConfig>?} props.options.fieldComponents custom fields
 * @returns {JSX.Element} Section for article content
 */
const SectionFeatures = props => {
  const { sectionId, className, rootClassName, appearance, options } = props;

  return (
    <SectionContainer
      id={sectionId}
      className={className}
      rootClassName={classNames(rootClassName || css.root)}
      appearance={appearance}
      options={options}
    >
      <div className={css.howItWorksSection}>
        <h2 className={css.sectionTitle}>How It Works</h2>
        <div className={css.cardsContainer}>
          <div className={css.card}>
            <div className={css.cardIcon}>📁</div>
            <h3 className={css.cardTitle}>Post your project</h3>
            <p className={css.cardDescription}>
              Share your requirements and get proposals from verified suppliers in your area.
            </p>
          </div>
          <div className={css.card}>
            <div className={css.cardIcon}>🛡️</div>
            <h3 className={css.cardTitle}>Compare Verified Suppliers</h3>
            <p className={css.cardDescription}>
              Review profiles, ratings, and proposals from trusted suppliers to make the best
              choice.
            </p>
          </div>
          <div className={css.card}>
            <div className={css.cardIcon}>💜</div>
            <h3 className={css.cardTitle}>Build with Confidence</h3>
            <p className={css.cardDescription}>
              Work with your chosen supplier and bring your exhibition vision to life successfully.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionFeatures;
