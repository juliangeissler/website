import React from 'react';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/DesignSection.en.json';
import chineseTranslation from './i18n/DesignSection.zh.json';
import I18nComponent from '../Components/I18nComponent';

import './DesignSection.scss';

class DesignSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section is-large section-protocol-design  has-background-blue">
        <div className="fixed-label is-hidden-mobile">100% open-source</div>

        {/* ---*/}
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column has-text-centered  is-12">
              <h1>Design</h1>
            </div>
          </div>

          {/* ---*/}
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-5 has-text-justify">
              <div className="content">
                <h2>
                  Whitepaper{' '}
                  <span className="deprecate is-unselectable">
                    (Deprecated)
                  </span>
                </h2>
                <p>
                  There is no better source than our Design Doc for you to learn
                  about all the ideas behind Loopring 3.0.
                </p>
                <h2>Design Doc</h2>
                <p>
                  There is no better source than our Design Doc for you to learn
                  about all the ideas behind Loopring 3.0.
                </p>
                {/* <FontAwesomeIcon icon={faFileAlt} size="5x" />*/}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a,
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>Building Blocks</h2>
                <ul className="links">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                    >
                      Vitalik's post on zkRollup
                      ···············································
                      <span className="symboled"> ◎</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://www.youtube.com/watch?v=mOm47gBMfg8"
                    >
                      Vitalik's tech-talk on
                      zkRollup······························
                      <span className="symboled"> ◎</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://en.wikipedia.org/wiki/Zero-knowledge_proof"
                    >
                      Zero Knowledge Proof /
                      ZKP····································
                      <span className="symboled"> ◎</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://github.com/scipr-lab/libsnark"
                    >
                      libsnark
                      ································································
                      <span className="symboled"> ◱</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://github.com/HarryR/ethsnarks"
                    >
                      ethsnarks
                      ··················································
                      <span className="symboled"> ◱</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://dusk.network/news/poseidon-the-most-efficient-zero-knowledge-friendly-implementation"
                    >
                      Poseidon hash function
                      ·················································
                      <span className="symboled"> ◱</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://en.wikipedia.org/wiki/Merkle_tree"
                    >
                      Quad-Merkle Tree
                      ···························································
                      <span className="symboled"> ◱</span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      Loopring 3.0 smart contracts··············the on-chain
                      part <span className="symboled">⟁</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      Loopring 3.0 ZKP circuits····················the off-chain
                      part <span className="symboled"> ⧉</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      SECBIT Security Audit Report
                      ·································
                      <span className="symboled"> ◒</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(DesignSection);
