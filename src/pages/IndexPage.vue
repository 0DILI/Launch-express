<template>
  <section class="main-section">
    <div class="main-section__flex-container">
      <!-- MAIN-SECTION__INNER-DIV-1 -->
      <div class="main-section__inner-div-1">
        <h4 class="title">Create New Post</h4>

        <!-- Brand & Type -->
        <div class="flex gap-medium">
          <!-- BRAND -->
          <div class="brand__flex-container">
            <h5 class="label-text">Brand:</h5>
            <span class="flex items-center gap-small">
              <img
                src="../../public/icons/Ellipse 1.png"
                alt=""
                style="width: 45px"
              />
              <p class="small-text q-pt-md">FredsFoxes</p>
            </span>
          </div>

          <!-- TYPE -->
          <div class="brand__flex-container">
            <h5 class="label-text">Type:</h5>

            <label class="switch">
              <input type="checkbox" id="togBtn" />
              <div class="slider round">
                <span class="on">Post</span>
                <span class="off">OFF</span>
              </div>
            </label>
          </div>
        </div>

        <!-- CONTENT -->
        <div>
          <div class="flex items-center justify-between">
            <h5 class="label-text">Content:</h5>

            <div>
              <span class="icon-wrapper">
                <i class="fa-solid fa-hashtag"></i>
              </span>

              <span class="icon-wrapper">
                <i class="fa-regular fa-face-smile"></i>
              </span>
            </div>
          </div>

          <textarea
            rows="20"
            cols="40"
            class="content"
            autocomplete="off"
            role="textbox"
            aria-autocomplete="list"
            aria-haspopup="true"
          ></textarea>
          <p class="word_count">56/2,200</p>
        </div>

        <!-- Upload Media -->
        <div>
          <h5 class="label-text">Upload Media:</h5>
          <span class="flex justify-center items-center upload-media">
            <i class="fa-solid fa-upload"></i>
            <p class="extra_small-text" style="font-weight: 600; margin: 0">
              Upload...
            </p>
          </span>
        </div>

        <!-- First Comment  -->
        <div class="flex items-center justify-between q-pt-md">
          <h5 class="label-text">First Comment:</h5>

          <div>
            <span class="icon-wrapper">
              <i class="fa-solid fa-hashtag"></i>
            </span>

            <span class="icon-wrapper">
              <i class="fa-regular fa-face-smile"></i>
            </span>
          </div>

          <textarea
            rows="20"
            cols="40"
            class="comment"
            autocomplete="off"
            role="textbox"
            aria-autocomplete="list"
            aria-haspopup="true"
          ></textarea>
        </div>

        <!-- Location -->
        <div class="flex items-center justify-between q-pt-md">
          <h5 class="label-text">Location:</h5>

          <textarea
            rows="20"
            cols="40"
            class="comment"
            autocomplete="off"
            role="textbox"
            aria-autocomplete="list"
            aria-haspopup="true"
          ></textarea>
        </div>
      </div>

      <!-- MAIN-SECTION__INNER-DIV-2 -->
      <div class="main-section__inner-div-2">
        <div class="preview__card">
          <div class="profile__container">
            <span class="profile">
              <img
                src="../../public/icons/Ellipse 1.png"
                alt=""
                style="width: 45px"
              />
              <p class="extra_small-text" style="font-weight: 600">
                FredsFoxes
              </p>
            </span>

            <p class="draft">Draft</p>
          </div>

          <img
            src="../assets/fox-img.png"
            alt=""
            style="object-fit: contain; width: 100%; height: 100%"
          />
          <span class="extra_small-text q-px-sm q-pt-md">
            <p style="margin: 0" class="">
              Feeling the mystery of the day with a touch of the undefined love
              🔮!
            </p>

            <p style="margin: 0" class="q-pt-sm">
              Embrace the unknown, for it's where true adventure begins!
            </p>

            <a href="" class="q-pt-sm">#Undefined #Mystery #AdventureBegins</a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main-section__flex-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.main-section__inner-div-1 {
  background-color: #fff;
  padding: 0 1.8rem;
  grid-column: span 3;
}

.main-section__inner-div-2 {
  background-color: #db99ff;
  grid-column: span 2;
  padding: 2rem 6.3rem;
}

:root {
  /* Font size variables */
  --font-size-extra_small: 13px;
  --font-size-small: 16px;
  --font-size-medium: 25px;
  --font-size-large: 24px;
  --font-size-xlarge: 32px;

  /* Font weight variables */
  --font-weight-light: 300;
  --font-weight-normal: 400;

  /* Gap variables */
  --gap-small: 20px;
  --gap-medium: 40px;

  /* Color variables */
  --purple: #330033;
  --grey: #dbdbdb;
}

/*REUSEABLE */
.label-text {
  font-size: var(--font-size-small);
  font-weight: 600;
  line-height: 0;
  color: var(--purple);
}
.title {
  font-size: var(--font-size-medium);
  font-weight: 600;
  color: var(--purple);
}
.gap-small {
  gap: var(--gap-small);
}
.gap-medium {
  gap: var(--gap-medium);
}
.extra_small-text {
  font-size: var(--font-size-extra_small);
}
.small-text {
  font-size: var(--font-size-small);
}

.brand__flex-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -20px;
}

.brand__flex-container h5 {
  line-height: 0;
}

/* Toggle switch css begins here */
.switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--purple);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--purple);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(55px);
  -ms-transform: translateX(55px);
  transform: translateX(55px);
}

.on {
  display: none;
}

.on,
.off {
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 13px;
  font-family: Verdana, sans-serif;
  user-select: none;
}

input:checked + .slider .on {
  display: block;
}

input:checked + .slider .off {
  display: none;
}

/* Rounded sliders */
.slider.round {
  border-radius: 10px;
}

.slider.round:before {
  border-radius: 50%;
}
/* Toggle switch css ends here */

.icon-wrapper {
  border: 1px solid var(--grey);
  border-radius: 5px;
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}

.icon-wrapper i {
  color: var(--purple);
}

textarea {
  width: 100%;
  border: 2px solid var(--grey);
  border-radius: 10px;
  resize: none;
  box-sizing: border-box;
}

.content {
  height: 130px;
}

.comment {
  height: 80px;
}

.word_count {
  font-size: var(--font-size-extra_small);
  display: flex;
  justify-content: end;
}

.upload-media {
  border: dashed 2px var(--grey);
  border-radius: 8px;
  width: 200px;
  padding: 0.8rem 1rem;
  margin-top: -8px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile p {
  padding-top: 20px;
}

.profile__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.draft {
  font-size: 12px;
  background-color: #dce7ff;
  padding: 0.3rem 0.8rem;
  font-weight: 600;
  margin-top: 30px;
  border-radius: 5px;
}

.preview__card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
