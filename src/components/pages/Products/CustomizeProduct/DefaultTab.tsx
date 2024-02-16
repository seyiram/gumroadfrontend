import React from "react";
import "./CustomizeProductStyles.css";
import UploadIcon from "../svgs/UploadIcon";
import ExternalLinkIcon from "../svgs/ExternalLinkIcon";
import GenerateImageIcon from "../svgs/GenerateImageIcon";
import ThumbnailImage from "../svgs/ThumbnailImage";

const DefaultTab = () => {
  const [showUploadOptions, setShowUploadOptions] = React.useState(false);
  const [showAIImageSearch, setShowAIImageSearch] = React.useState(false);
  const [showThumbnailUploadOptions, setShowThumbnailUploadOptions] =
    React.useState(false);
  const [showThumbnailSearch, setShowThumbnailSearch] = React.useState(false);

  const handleUploadClick = () => {
    setShowUploadOptions(!showUploadOptions);
  };

  const handleGenerateWithAIClick = () => {
    setShowAIImageSearch(!showAIImageSearch);
  };

  const handleThumbnailUploadClick = () => {
    setShowThumbnailUploadOptions(!showThumbnailUploadOptions);
  };

  const handleThumbNailSearch = () => {
    setShowThumbnailSearch(!showThumbnailSearch);
  };

  return (
    <div className="main-content">
      <aside className="left-panel">
        <section className="product-form">
          <div className="product-form-field">
            <label htmlFor="productName" className="product-label">
              Name
            </label>
            <input type="text" id="name" placeholder="" />
          </div>
        </section>
        <section className="text-editor-wrapper">
          <label htmlFor="text-editor-">Description</label>
          <article className="text-editor">
            <div className="editor-toolbar">
              <button className="editor-btn" data-tooltip="Bold">
                <strong>B</strong>
              </button>
              <button className="editor-btn" data-tooltip="Italic">
                <em>I</em>
              </button>
              <button className="editor-btn" data-tooltip="Underline">
                <u>U</u>
              </button>
              <button className="editor-btn" data-tooltip="Strikethrough">
                <s>S</s>
              </button>
              <button className="editor-btn">Tr</button>
              <button className="editor-btn">&lt;/&gt;</button>
              <button className="editor-btn">&#8801;</button>
              <button className="editor-btn">—</button>
              <button className="editor-btn" data-tooltip="Insert link">
                &#128279;
              </button>
              <button className="editor-btn" data-tooltip="Insert video">
                &#128247;
              </button>
              <button className="editor-btn" data-tooltip="Insert tweet">
                &#10006;
              </button>
              <div className="right-group">
                <button className="editor-btn" data-tooltip="Redo">
                  &#8592;
                </button>
                <button className="editor-btn" data-tooltip="Undo">
                  &#8594;
                </button>
              </div>
            </div>
            <textarea
              className="editor-textarea"
              placeholder="Describe your product..."
            ></textarea>
          </article>
        </section>
        <section className="url-form-field">
          <div className="url-form-labels">
            <label className="url-label">URL</label>
            <span className="copy-url" data-tooltip="Copy to Clipboard">
              Copy URL
            </span>
          </div>
          <div className="url-field">
            <span className="url-prefix">yoggijerry.gumroad.com/l/</span>
            <input type="text" className="url-slug" />
          </div>
        </section>
        <section className="custom-domain-wrapper">
          <div className="custom-domain-label">
            <label htmlFor="custom-domain">Custom Domain</label>
            <span className="learn-more">Learn more</span>
          </div>
          <input type="text" placeholder="yourdomain.com" />
        </section>
        <section className="upload-container">
          <label htmlFor="cover-upload" className="cover-label">
            Cover
          </label>
          <div className={`upload-area ${showUploadOptions ? "hidden" : ""}`}>
            <label
              htmlFor="cover-upload"
              className="upload-button"
              onClick={handleUploadClick}
            >
              <span className="upload-icon">
                <UploadIcon />
              </span>
              Upload images or videos
            </label>
            <p className="upload-instructions">
              Images should be horizontal, at least 1280x720px, and 72 DPI (dots
              per inch).
            </p>
          </div>
          {showUploadOptions && (
            <div className={`upload-options-container`}>
              <div className="upload-options-wrapper">
                <div className="upload-option">
                  <label htmlFor="file-upload" className="option-label">
                    <span>
                      <UploadIcon />
                    </span>
                    Computer files
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    className="option-input"
                    hidden
                  />
                </div>
                <div className="upload-option">
                  <span>
                    <ExternalLinkIcon />
                  </span>
                  External link
                </div>
                <div
                  className={`upload-option ${
                    showAIImageSearch ? "focus" : ""
                  }`}
                  onClick={() => handleGenerateWithAIClick()}
                >
                  <span>
                    <GenerateImageIcon />
                  </span>
                  Generate with AI
                </div>
              </div>
              {showAIImageSearch && (
                <div className="generate-image-container">
                  <input
                    className="generate-image-input"
                    type="text"
                    placeholder="Write a prompt to generate an image"
                  />
                  <span className="generate-image-info">
                    e.g. 'An image of a girl sitting on a beach'
                  </span>
                </div>
              )}
            </div>
          )}
        </section>
        <section
          className="thumbnail-upload"
          onClick={handleThumbnailUploadClick}
        >
          <label htmlFor="thumbnail" className="thumbnail-label">
            Thumbnail
          </label>
          <div className="thumbnail-upload-content">
            <div className="thumbnail-upload-controls">
              <label htmlFor="thumbnail" className="thumbnail-upload-icon">
                <ThumbnailImage />
                <button className="thumbnail-upload-button">
                  {" "}
                  <UploadIcon width={27} height={27} /> Upload files
                </button>
              </label>
            </div>
            <p className="upload-instructions">
              This image appears in the Gumroad Library, Discover, and Profile
              pages. Your image should be square, at least 600x600px, and JPG,
              PNG, or GIF format.
            </p>
          </div>
        </section>
        {showThumbnailUploadOptions && (
          <section className="thumbnail-upload-options">
            <div className="thumbnail-upload-wrapper">
              <label htmlFor="thumbnail" className="thumbnail-upload-option">
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  accept="image/png, image/jpeg, image/gif"
                  hidden
                />
                <UploadIcon />
                Computer Files
              </label>

              <div
                className={`thumbnail-upload-option ${
                  showThumbnailSearch ? "focus" : ""
                }`}
                onClick={handleThumbNailSearch}
              >
                <GenerateImageIcon />
                Generate with AI
              </div>
            </div>
            {showThumbnailSearch && (
              <div className="thumbnail-image-search">
                <input
                  type="text"
                  placeholder="Write a prompt to generate an image"
                  className="thumbnail-search-input"
                />
                <span className="generate-thumbnail-info">
                  e.g. An image of a girl sitting on the beach
                </span>
              </div>
            )}
          </section>
        )}
        <section className="product-info">
          <h2>Product Info</h2>
          <label htmlFor="callToAction">Call to action</label>
          <select id="callToAction" name="callToAction">
            <option value="want">I want this!</option>
            <option value="buy" selected>
              Buy this
            </option>
            <option value="pay">Pay</option>
          </select>
          <div className="summary">
            <label htmlFor="callToAction">Summary</label>
            <input type="text" placeholder="You'll get..." />
          </div>

          <div className="pricing-container">
            <h2>Pricing</h2>
            <label className="amount-label" htmlFor="price">
              Amount
            </label>
            <div className="pricing-input">
              <div className="symbol-box">$</div>
              <input type="text" className="currency-input" />
            </div>
          </div>
        </section>
      </aside>
      <div className="right-panel"></div>
    </div>
  );
};

export default DefaultTab;
