<template>
  <mom-page>
    <mom-layout-wrapper>
      <mom-card>
        <mom-grid-container>
          <mom-grid-column size="12" size-lg="6">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
        </mom-grid-container>
      </mom-card>

      <mom-card>
        <mom-grid-container>
          <mom-grid-column size="12" size-lg="6">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
          <mom-grid-column size="12" size-lg="6">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
        </mom-grid-container>
      </mom-card>

      <mom-card>
        <mom-grid-container>
          <mom-grid-column size="12" size-lg="6" sizeXl="4">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
          <mom-grid-column size="12" size-lg="6" sizeXl="4">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
          <mom-grid-column size="12" size-lg="6" sizeXl="4">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
        </mom-grid-container>
      </mom-card>

      <mom-card>
        <mom-grid-container>
          <mom-grid-column size="12" size-lg="6" sizeXl="3">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
          <mom-grid-column size="12" size-lg="6" sizeXl="3">
            <mom-card variant="requirement" title="Requirement card title">
              <div class="requirementCard">
                <div class="landingIcon" />
                <p class="mom-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </mom-card>
          </mom-grid-column>
          <mom-grid-column size="12" size-lg="12" sizeXl="6">
            <mom-card variant="requirement" title="Requirement card title">
              <mom-grid-container>
                <mom-grid-column size="12" size-lg="6">
                  <div class="requirementCard">
                    <div class="landingIcon" />
                    <p class="mom-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </mom-grid-column>
                <mom-grid-column size="12" size-lg="6">
                  <div class="requirementCard">
                    <div class="landingIcon" />
                    <p class="mom-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </mom-grid-column>
              </mom-grid-container>
            </mom-card>
          </mom-grid-column>
        </mom-grid-container>
      </mom-card>
    </mom-layout-wrapper>
  </mom-page>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.requirementCard {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media #{$media-query-mobile} {
    flex-direction: row;
    text-align: left;
  }

  @media #{$media-query-desktop} {
    flex-direction: column;
    text-align: center;
  }
}

.landingIcon {
  width: rem(72);
  height: rem(64);
  flex: none;
  margin-top: 0;
  margin-bottom: rem(24);
  margin-left: auto;
  margin-right: auto;
  background-color: $color-red-05;

  @media #{$media-query-mobile} {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: rem(32);
  }

  @media #{$media-query-desktop} {
    margin-bottom: rem(24);
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
