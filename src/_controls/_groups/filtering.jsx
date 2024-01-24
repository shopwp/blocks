import FilterTextControl from "../_common/filter-text-control"
import { Radio } from "@shopwp/wp-ui"

function FilteringControls({
  settings,
  dispatch,
  translations,
  isLoading = false,
  single = false,
  forCollection = false,
}) {
  return (
    <>
      <FilterTextControl
        name="title"
        label={translations.a.filterByTitle}
        help={translations.a.filterByTitleHelp}
        isLoading={isLoading}
        collection={settings.collection}
        settings={settings}
        dispatch={dispatch}
      />

      {/* <PostID state={blockState} collection={settings.collection} /> */}
      {!single && !forCollection ? (
        <FilterTextControl
          name="collection"
          label={translations.a.filterByCollection}
          help={translations.a.filterByCollectionHelp}
          isLoading={isLoading}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}
      {!single && !forCollection ? (
        <FilterTextControl
          name="tag"
          label={translations.a.filterByTag}
          help={translations.a.filterByTagHelp}
          isLoading={isLoading}
          collection={settings.collection}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}
      {!single && !forCollection ? (
        <FilterTextControl
          name="vendor"
          label={translations.a.filterByVendor}
          help={translations.a.filterByVendorHelp}
          isLoading={isLoading}
          collection={settings.collection}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}
      {!single && !forCollection ? (
        <FilterTextControl
          name="productType"
          label={translations.a.filterByProdType}
          help={translations.a.filterByProdTypeHelp}
          state={settings.productType}
          isLoading={isLoading}
          collection={settings.collection}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}
      {!single && !forCollection ? (
        <FilterTextControl
          name="productId"
          label={translations.a.filterById}
          help={translations.a.filterByIdHelp}
          state={settings.productId}
          isLoading={isLoading}
          collection={settings.collection}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}
      {!single && !forCollection ? (
        <Radio
          name="availableForSale"
          label={translations.l.availSale}
          settings={settings}
          dispatch={dispatch}
          disabled={isLoading}
          help={translations.a.availSaleHelp}
          options={[
            { label: translations.a.any, value: "any" },
            { label: translations.l.inStock, value: "true" },
            { label: translations.l.outOfStock, value: "false" },
          ]}
        />
      ) : null}
      {!single && !forCollection ? (
        <Radio
          name="connective"
          label={translations.a.matchCriteria}
          help={translations.a.matchCriteriaHelp}
          settings={settings}
          dispatch={dispatch}
          disabled={isLoading}
          options={[
            {
              label: translations.a.and,
              value: "AND",
            },
            {
              label: translations.a.or,
              value: "OR",
            },
          ]}
        />
      ) : null}
    </>
  )
}

export default FilteringControls
