import Excludes from "../excludes"
import FullWidth from "../full-width"
import AlignHeight from "../align-height"
import ItemsPerRow from "../items-per-row"
import GridColumnGap from "../grid-column-gap"
import Carousel from "../carousel"
import CarouselDots from "../carousel-dots"
import CarouselInfinite from "../carousel-infinite"
import CarouselSpeed from "../carousel-speed"
import CarouselSlidesToShow from "../carousel-slides-to-show"
import CarouselSlidesToScroll from "../carousel-slides-to-scroll"

function LayoutControls({ settings, isSingle = false }) {
  return (
    <>
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
    </>
  )
}

export default wp.element.memo(LayoutControls)
