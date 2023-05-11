const ShowFeaturedOnly = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlShowFeaturedOnly-admin' */ "../show-featured-only"
  )
)

const ShowZoom = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlShowZoom-admin' */ "../show-zoom")
)

const ShowImagesCarousel = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlShowImagesCarousel-admin' */ "../show-images-carousel"
  )
)

const ImagesSizingToggle = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlImagesSizingToggle-admin' */ "../images-sizing-toggle"
  )
)

const ImagesSizingWidth = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlImagesSizingWidth-admin' */ "../images-sizing-width"
  )
)

const ImagesSizingHeight = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlImagesSizingHeight-admin' */ "../images-sizing-height"
  )
)

const ImagesSizingCrop = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlImagesSizingCrop-admin' */ "../images-sizing-crop"
  )
)

const ImagesSizingScale = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlImagesSizingScale-admin' */ "../images-sizing-scale"
  )
)

const ImagesShowNextOnHover = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlImagesShowNextOnHover-admin' */ "../images-show-next-on-hover"
  )
)

const ThumbnailsImagesSizingToggle = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlThumbnailsImagesSizingToggle-admin' */ "../thumbnails-images-sizing-toggle"
  )
)

const ThumbnailsImagesSizingWidth = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlThumbnailsImagesSizingWidth-admin' */ "../thumbnails-images-sizing-width"
  )
)

const ThumbnailsImagesSizingHeight = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlThumbnailsImagesSizingHeight-admin' */ "../thumbnails-images-sizing-height"
  )
)

const ThumbnailsImagesSizingCrop = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlThumbnailsImagesSizingCrop-admin' */ "../thumbnails-images-sizing-crop"
  )
)

const ThumbnailsImagesSizingScale = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlThumbnailsImagesSizingScale-admin' */ "../thumbnails-images-sizing-scale"
  )
)

function DescriptionControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components
  return (
    <Suspense fallback={<Spinner />}>
      <ShowFeaturedOnly showFeaturedOnly={settings.showFeaturedOnly} />
      <ShowZoom showZoom={settings.showZoom} />
      <ShowImagesCarousel showImagesCarousel={settings.showImagesCarousel} />
      <ImagesShowNextOnHover
        showZoom={settings.showZoom}
        imagesShowNextOnHover={settings.imagesShowNextOnHover}
      />
      <ImagesSizingToggle toggle={settings.imagesSizingToggle} />
      <ImagesSizingWidth
        width={settings.imagesSizingWidth}
        toggle={settings.imagesSizingToggle}
      />
      <ImagesSizingHeight
        height={settings.imagesSizingHeight}
        toggle={settings.imagesSizingToggle}
      />
      <ImagesSizingCrop
        crop={settings.imagesSizingCrop}
        toggle={settings.imagesSizingToggle}
      />
      <ImagesSizingScale
        scale={settings.imagesSizingScale}
        toggle={settings.imagesSizingToggle}
      />
      <ThumbnailsImagesSizingToggle
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingWidth
        width={settings.thumbnailImagesSizingWidth}
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingHeight
        height={settings.thumbnailImagesSizingHeight}
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingCrop
        crop={settings.thumbnailImagesSizingCrop}
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingScale
        scale={settings.thumbnailImagesSizingScale}
        toggle={settings.thumbnailImagesSizingToggle}
      />
    </Suspense>
  )
}

export default wp.element.memo(DescriptionControls)
