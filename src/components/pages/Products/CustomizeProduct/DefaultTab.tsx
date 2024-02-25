import "./CustomizeProductStyles.css";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import UploadIcon from "../svgs/UploadIcon";
import ExternalLinkIcon from "../svgs/ExternalLinkIcon";
import GenerateImageIcon from "../svgs/GenerateImageIcon";
import ThumbnailImage from "../svgs/ThumbnailImage";
import { useProductForm } from "../../../../context/ProductFormContext";
import Button from "../../../ui/Button";
import { useGenerateImage } from "../../../../hooks/useGenerateImage";
import IconPlusCircle from "../svgs/IconPlusCircle";


const DefaultTab = () => {
  const [showUploadOptions, setShowUploadOptions] = React.useState(false);
  const [showCoverImageSearch, setShowCoverImageSearch] = React.useState(false);
  const [showThumbnailUploadOptions, setShowThumbnailUploadOptions] =
    React.useState(false);
  const [showThumbnailSearch, setShowThumbnailSearch] = React.useState(false);
  const [isUploadContainerVisible, setIsUploadContainerVisible] =
    React.useState(true);

  const { state, dispatch, handleChange } = useProductForm();
 

  const { generateImage, isPending } = useGenerateImage();

  const handleGenerateImage = () => {
    if (state.coverImagePrompt && !isPending) {
      generateImage(state.coverImagePrompt, {
        onSuccess: (data) => {
          dispatch({ type: "SET_COVER_IMAGE", url: data.url });
          console.log("ImageUrl from Default Tab: ", data.url);
        },
        onError: (error) => {
          console.log("Error generating image: ", error);
          throw new Error("Error generating image from DALL-E");
        },
      });
    }
  };

  console.log("Image here: ", state.coverImage);

  const handleCoverImageUploadClick = () => {
    setShowUploadOptions(!showUploadOptions);
  };

  const handleGenerateWithAIClick = () => {
    setShowCoverImageSearch(!showCoverImageSearch);
  };

  const handleThumbnailUploadClick = () => {
    setShowThumbnailUploadOptions(!showThumbnailUploadOptions);
  };

  const handleThumbNailSearch = () => {
    setShowThumbnailSearch(!showThumbnailSearch);
  };

  const handleAIImageClick = () => {
    setIsUploadContainerVisible(false);
  };

  return (
    <div className="main-content">
      <aside className="left-panel">
        <section className="product-form">
          <div className="product-form-field">
            <label htmlFor="productName" className="product-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder=""
              defaultValue={state.productName}
              onChange={handleChange("productName")}
            />
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
              value={state.productDescription}
              onChange={handleChange("productDescription")}
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
            <input
              type="text"
              className="url-slug"
              value={state.urlSlug}
              onChange={handleChange("urlSlug")}
            />
          </div>
        </section>
        <section className="custom-domain-wrapper">
          <div className="custom-domain-label">
            <label htmlFor="custom-domain">Custom Domain</label>
            <span className="learn-more">Learn more</span>
          </div>
          <input
            type="text"
            placeholder="yourdomain.com"
            value={state.customDomain}
            onChange={handleChange("customDomain")}
          />
        </section>
        <section className="upload-container">
          <label htmlFor="cover-upload" className="cover-label">
            Cover
          </label>
          {isUploadContainerVisible ? (
            <>
              <div
                className={`upload-area ${showUploadOptions ? "hidden" : ""}`}
              >
                <label
                  htmlFor="cover-upload"
                  className="upload-button"
                  onClick={handleCoverImageUploadClick}
                >
                  <span className="upload-icon">
                    <UploadIcon />
                  </span>
                  Upload images or videos
                </label>
                <p className="upload-instructions">
                  Images should be horizontal, at least 1280x720px, and 72 DPI
                  (dots per inch).
                </p>
              </div>
              {showUploadOptions && (
                <section className={`upload-options-container`}>
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
                        showCoverImageSearch ? "focus" : ""
                      }`}
                      onClick={() => handleGenerateWithAIClick()}
                    >
                      <span>
                        <GenerateImageIcon />
                      </span>
                      Generate with AI
                    </div>
                  </div>
                  {showCoverImageSearch && (
                    <div className="generate-image-container">
                      <input
                        className="generate-image-input"
                        type="text"
                        placeholder="Write a prompt to generate an image"
                        value={state.coverImagePrompt}
                        onChange={(event) =>
                          dispatch({
                            type: "SET_FIELD",
                            field: "coverImagePrompt",
                            value: event.target.value,
                          })
                        }
                      />
                      <Button
                        onClick={handleGenerateImage}
                        disabled={isPending}
                      >
                        {" "}
                        Generate image
                      </Button>
                      <span className="generate-image-info">
                        e.g. 'An image of a girl sitting on a beach'
                      </span>
                      {isPending && (
                        <div className="loader">
                          <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#ff90e8"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        </div>
                      )}

                      {!isPending && (
                        <div className="cover-image-select">
                          {Array.isArray(state.coverImage) &&
                            state.coverImage.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Generated from DALL·E ${index + 1}`}
                                onClick={handleAIImageClick}
                              />
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </section>
              )}
            </>
          ) : (
            <div className="selected-cover-image-container">
              <div className="tab-buttons">
                <span className="img-tab-button">
                  <img src={state.coverImage[0]} alt="" />
                </span>
                <span className="upload-tab-button">
                  <IconPlusCircle />
                </span>
              </div>
              <div className="selected-image">
                <img src={state.coverImage[0]} alt="Generated by DALL-E" />
              </div>
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
              <section className="thumbnail-image-search">
                <input
                  type="text"
                  placeholder="Write a prompt to generate an image"
                  className="thumbnail-search-input"
                />
                <span className="generate-thumbnail-info">
                  e.g. An image of a girl sitting on the beach
                </span>
              </section>
            )}
          </section>
        )}
        <section className="product-info">
          <h2>Product Info</h2>
          <label htmlFor="callToAction">Call to action</label>
          <select
            id="callToAction"
            name="selectedAction"
            value={state.selectedAction}
            onChange={handleChange("selectedAction")}
          >
            <option value="want">I want this!</option>
            <option value="buy" selected>
              Buy this
            </option>
            <option value="pay">Pay</option>
          </select>
          <div className="summary">
            <label htmlFor="callToAction">Summary</label>
            <input
              type="text"
              placeholder="You'll get..."
              value={state.summary}
              onChange={handleChange("summary")}
            />
          </div>

          <section className="pricing-container">
            <h2>Pricing</h2>
            <label className="amount-label" htmlFor="price">
              Amount
            </label>
            <div className="pricing-input">
              <div className="symbol-box">{state.selectedCurrency.symbol}</div>
              <input
                type="text"
                className="currency-input"
                defaultValue={state.price}
                onChange={handleChange("price")}
              />
            </div>
          </section>
        </section>
      </aside>
      <div className="right-panel"></div>
    </div>
  );
};

export default DefaultTab;
