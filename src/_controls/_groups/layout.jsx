const Excludes = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlExcludes-admin' */ "../excludes")
)

const FullWidth = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlFullWidth-admin' */ "../full-width")
)

const AlignHeight = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlAlignHeight-admin' */ "../align-height")
)

const ItemsPerRow = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlItemsPerRow-admin' */ "../items-per-row")
)

const GridColumnGap = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlGridColumnGap-admin' */ "../grid-column-gap"
  )
)

const Carousel = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlCarousel-admin' */ "../carousel")
)

const CarouselDots = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlCarouselDots-admin' */ "../carousel-dots")
)

const CarouselInfinite = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlCarouselInfinite-admin' */ "../carousel-infinite"
  )
)

const CarouselSpeed = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlCarouselSpeed-admin' */ "../carousel-speed"
  )
)

const CarouselSlidesToShow = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlCarouselSlidesToShow-admin' */ "../carousel-slides-to-show"
  )
)

const CarouselSlidesToScroll = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlCarouselSlidesToScroll-admin' */ "../carousel-slides-to-scroll"
  )
)

function LayoutControls({ settings, isSingle = false }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      {!isSingle && <ItemsPerRow itemsPerRow={settings.itemsPerRow} />}
      <Excludes excludes={settings.excludes} />
      {!isSingle && <GridColumnGap gridColumnGap={settings.gridColumnGap} />}
      <FullWidth fullWidth={settings.fullWidth} />
      {!isSingle && <AlignHeight height={settings.alignHeight} />}
      {!isSingle && <Carousel carousel={settings.carousel} />}
      {settings.carousel && !isSingle && (
        <CarouselDots dots={settings.carouselDots} />
      )}
      {settings.carousel && !isSingle && (
        <CarouselInfinite infinite={settings.carouselInfinite} />
      )}
      {settings.carousel && !isSingle && (
        <CarouselSpeed speed={settings.carouselSpeed} />
      )}
      {settings.carousel && !isSingle && (
        <CarouselSlidesToShow slides={settings.carouselSlidesToShow} />
      )}
      {settings.carousel && !isSingle && (
        <CarouselSlidesToScroll slides={settings.carouselSlidesToScroll} />
      )}
    </Suspense>
  )
}

export default wp.element.memo(LayoutControls)
