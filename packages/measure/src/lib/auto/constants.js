export const TRIGGER_EVENTS = ['click', 'keyup'];

export const TRIGGER_KEYCODES = [13, 32];

export const DATA_ATTRIBUTES = {
    IMPRESSION: 'data-measure-impression',
    LIST: 'data-measure-impression-list',
    ITEM: 'data-measure-item',
    CLICK: 'data-measure-click',
    ADD: 'data-measure-add',
    DETAIL: 'data-measure-detail',
    CHECKOUT: 'data-measure-checkout',
    CHECKOUT_STEP: 'data-measure-checkout-step',
    CHECKOUT_STEP_OPTION: 'data-measure-checkout-step-option',
    PURCHASE: 'data-measure-purchase',
    ITEMS: 'data-measure-items',
    CUSTOM: 'data-measure-custom',
    EVENT: 'data-measure-event',
	CUSTOM_DIMENSION: 'data-measure-custom-dimension',
	CUSTOM_METRIC: 'data-measure-custom-metric',
	CONTENT: 'data-measure-content'
};

export const META_NAMES = {
    CUSTOM_PREFIX: 'custom-dimension-'
};

export const LISTENER_OPTIONS = { composed: true, useCapture: true };