<template>
  <section class="main-section">
    <div class="main-section__flex-container">
      <!-- MAIN-SECTION__INNER-DIV-1 -->
      <div class="main-section__inner-div-1">
        <h4 class="title" @click="count.increment">
          Create New Post{{ count.count }}
        </h4>

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
          <!--
          <textarea
            rows="20"
            cols="40"
            class="content"
            v-model="count.state.content"
            autocomplete="off"
            role="textbox"
            aria-autocomplete="list"
            aria-haspopup="true"
          ></textarea> -->

          <!-- <div class="content">
            <q-inpu
            t v-model="count.state.content" filled type="textarea" />
          </div> -->
          <div
            class="extra_small-text q-px-sm q-pt-md"
            style="background-color: #e6e6e6"
          >
            <p style="margin: 0" class="">
              <!-- <q-input
                v-model="count.state.content"
                filled
                type="textarea"
                :style="{ opacity: 0 }"
                style="color: red"
              /> -->

              <textarea
                rows="20"
                cols="40"
                class="content"
                v-model="count.state.content"
                autocomplete="off"
                role="textbox"
                aria-autocomplete="list"
                aria-haspopup="true"
              ></textarea>
            </p>
            <div class="flex items-center" style="gap: 5px">
              <a
                href=""
                class="q-pt-sm"
                v-for="(item, index) in count.state.tags"
                :key="index"
                >{{ item }}
              </a>
            </div>
          </div>
          <p class="word_count">56/2,200</p>
        </div>

        <!-- Upload Media -->
        <div>
          <h5 class="label-text">Upload Media:</h5>

          <label
            for="dropzone-file6"
            class="flex flex-col w-[50px] h-40 border-2 border-dashed rounded-lg cursor-pointer"
          >
            <span class="flex justify-center items-center upload-media">
              <i class="fa-solid fa-upload"></i>
              <p class="extra_small-text" style="font-weight: 600; margin: 0">
                Upload...
              </p>
            </span>
            <input
              id="dropzone-file6"
              type="file"
              class="hidden"
              @change="filesChange($event.target.name, $event.target.files)"
            />
          </label>
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

          <div class="content">
            <q-input v-model="text" filled type="textarea" />
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center justify-between q-pt-md">
          <h5 class="label-text">Location:</h5>
          <div class="content">
            <q-input filled type="textarea" />
          </div>
        </div>
      </div>

      <!-- MAIN-SECTION__INNER-DIV-2 -->

      <div class="main-section__inner-div-2">
        <div class="nav-container">
          <p @click="preview = 0">Preview</p>
          <p @click="preview = 1">Hashtags</p>
        </div>
        <div class="preview__card" style="margin-top: 1rem" v-if="preview == 0">
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
            :src="count.state.image"
            alt=""
            style="object-fit: contain; width: 100%; height: 100%"
          />
          <span class="extra_small-text q-px-sm q-pt-md">
            <p style="margin: 0" class="">
              {{ count.state.content }}
            </p>
            <a
              href=""
              class="q-pt-sm"
              v-for="(item, index) in count.state.tags"
              :key="index"
              >{{ item }}
            </a>
          </span>
        </div>

        <div v-if="preview == 1">
          <!-- HASHTAG CARD -->
          <div
            style="
              padding: 20px;
              background-color: white;
              border-radius: 15px;
              margin-top: 1rem;
            "
          >
            <div class="hashtag__card">
              <h5 class="label-text" style="text-align: center">
                Suggested Hashtags:
              </h5>

              <div
                class="checkbox-container q-pt-lg"
                v-for="(item, index) in tags"
                :key="index"
              >
                <input
                  type="checkbox"
                  id="myCheckbox"
                  :value="item"
                  @change="addTag(item)"
                />
                <label for="myCheckbox" class="hashtag"> {{ item }} </label>
              </div>
            </div>

            <!-- <div class="flex justify-center q-pt-lg">
              <q-btn color="white" text-color="purple" label="Add Hashtags" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePostStore } from 'src/store/post';
import { ref } from 'vue';

let count = usePostStore();
let preview = ref(0);

let tags = [
  '#BigMystery',
  '#HugeAdventure',
  '#NoStoppingUs',
  '#TimeWillTell',
  '#Love4Ever',
  '#Unknown',
];

function filesChange(fieldName, fileList) {
  let fileToUpload = fileList[0];
  var reader = new FileReader();
  reader.onload = (event) => {
    count.state.image = event.target.result;
  };
  reader.readAsDataURL(fileToUpload);
  if (!fileList.length) return;
  return fileToUpload;
}

function addTag(tag) {
  const tagIndex = count.state.tags.indexOf(tag);
  if (tagIndex === -1) {
    count.state.tags.push(tag);
  } else {
    count.state.tags.splice(tagIndex, 1);
  }
}
</script>

<style lang="scss">
.main-section__flex-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.main-section__inner-div-1 {
  background-color: #fff;
  padding: 0 1.8rem;
  padding-bottom: 1rem;
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
s .brand__flex-container h5 {
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

// extarea {
//   width: 100%;
//   border: 2px solid var(--grey);
//   border-radius: 10px;

//   box-sizing: border-box;
// }

.content {
  height: 130px;
  width: 100%;
  background: #e6e6e6;
  border: 0;
}

.comment {
  height: 20px;
  width: 100%;
}
.word_count {
  font-size: var(--font-size-extra_small);
  display: flex;
  justify-content: end;
  padding-top: 8px;
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

ashtag__card {
  background-color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  padding-bottom: 1.2rem;
  margin-top: 2rem;
}

.nav-container {
  background-color: #f1f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding: 0.6rem;
  border-radius: 5px;
  color: var(--light_purple);
  font-weight: 600;
}

.nav-container p {
  margin: 0;
}

.nav-container p:hover {
  background-color: #fff;
  padding: 0.4rem;
  border-radius: 5px;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-container input[type='checkbox'] {
  width: 20px; /* Set the width of the checkbox */
  height: 20px; /* Set the height of the checkbox */
  margin-right: 8px;
  appearance: none; /* Remove default checkbox styling */
  border: 2px solid #c559ff; /* Set the outline color */
  border-radius: 3px; /* Optional: rounded corners */
  position: relative; /* For pseudo-element positioning */
  cursor: pointer; /* Change cursor to pointer */
}

.checkbox-container input[type='checkbox']::before {
  content: ''; /* Required for pseudo-element */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px; /* Inner box size */
  height: 14px; /* Inner box size */
  background-color: transparent; /* Default background */
  transform: translate(-50%, -50%);
  border-radius: 2px; /* Match outer border radius */
}

.checkbox-container input[type='checkbox']:checked::before {
  background-color: #c559ff; /* Checked background color */
  border-radius: 2px;
}

.hashtag {
  color: var(--purple);
  font-size: 16px;
  text-decoration: none;
}
</style>
