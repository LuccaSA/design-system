/*tsling:disable*/
const NG_DOCS = {
  "ISuggestion": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "name": "ISuggestion",
    "className": "ISuggestion",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "item",
        "type": "T",
        "description": ""
      },
      {
        "name": "relevance",
        "type": "any",
        "description": ""
      }
    ]
  },
  "IApiItem": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "name": "IApiItem",
    "className": "IApiItem",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "id",
        "type": "TId",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      }
    ]
  },
  "IApiResponse": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "name": "IApiResponse",
    "className": "IApiResponse",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "data",
        "type": "D",
        "description": ""
      }
    ]
  },
  "IApiCollectionResponse": {
    "fileName": "libraries/core/src/lib/api/api.model.ts",
    "name": "IApiCollectionResponse",
    "className": "IApiCollectionResponse",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiModule": {
    "fileName": "libraries/core/src/lib/api/api.module.ts",
    "className": "LuApiModule",
    "name": "LuApiModule",
    "declarations": [],
    "exports": [
      "LuApiSelectModule"
    ]
  },
  "LuApiSelectModule": {
    "fileName": "libraries/core/src/lib/api/select/api-select.module.ts",
    "className": "LuApiSelectModule",
    "name": "LuApiSelectModule",
    "declarations": [],
    "exports": [
      "LuApiFeederModule",
      "LuApiSearcherModule",
      "LuApiPagerModule",
      "LuApiSelectInputModule"
    ]
  },
  "LuApiFeederComponent": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.component.ts",
    "name": "LuApiFeederComponent",
    "className": "LuApiFeederComponent",
    "description": "",
    "selector": "lu-api-feeder",
    "inputs": [
      {
        "name": "api",
        "type": "string",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => T",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "outOptions$",
        "type": "BehaviorSubject<T[]>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuApiOptionFeeder": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.model.ts",
    "name": "ILuApiOptionFeeder",
    "className": "ILuApiOptionFeeder",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiFeederService": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.model.ts",
    "name": "ILuApiFeederService",
    "className": "ILuApiFeederService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiFeederModule": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.module.ts",
    "className": "LuApiFeederModule",
    "name": "LuApiFeederModule",
    "declarations": [
      "\r\n\t\tLuApiFeederComponent"
    ],
    "exports": [
      "LuApiFeederComponent"
    ]
  },
  "LuApiFeederService": {
    "fileName": "libraries/core/src/lib/api/select/feeder/api-feeder.service.ts",
    "className": "LuApiFeederService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiSelectInputComponent": {
    "fileName": "libraries/core/src/lib/api/select/input/api-select-input.component.ts",
    "name": "LuApiSelectInputComponent",
    "className": "LuApiSelectInputComponent",
    "description": "",
    "selector": "lu-api-select",
    "inputs": [
      {
        "name": "api",
        "type": "string",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "multiple",
        "type": "string | boolean",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "placeholder",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => T",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "isDisabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isFocused",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "tabindex",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "onClick",
        "description": "bind to dom events",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "LuApiSelectInputModule": {
    "fileName": "libraries/core/src/lib/api/select/input/api-select-input.module.ts",
    "className": "LuApiSelectInputModule",
    "name": "LuApiSelectInputModule",
    "declarations": [
      "\r\n\t\tLuApiSelectInputComponent"
    ],
    "exports": [
      "LuApiSelectInputComponent"
    ]
  },
  "LuApiPagerComponent": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.component.ts",
    "name": "LuApiPagerComponent",
    "className": "LuApiPagerComponent",
    "description": "",
    "selector": "lu-api-pager",
    "inputs": [
      {
        "name": "api",
        "type": "string",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => T",
        "description": "a function to transform the item fetched from the api into the kind of item you want\r\nif you wnat to cast dates into moments for example"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "outOptions$",
        "type": "BehaviorSubject<T[]>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuApiOptionPager": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.model.ts",
    "name": "ILuApiOptionPager",
    "className": "ILuApiOptionPager",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiPagerService": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.model.ts",
    "name": "ILuApiPagerService",
    "className": "ILuApiPagerService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiPagerModule": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.module.ts",
    "className": "LuApiPagerModule",
    "name": "LuApiPagerModule",
    "declarations": [
      "\r\n\t\tLuApiPagerComponent"
    ],
    "exports": [
      "LuApiPagerComponent"
    ]
  },
  "LuApiPagerService": {
    "fileName": "libraries/core/src/lib/api/select/pager/api-pager.service.ts",
    "className": "LuApiPagerService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiSearcherComponent": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.component.ts",
    "name": "LuApiSearcherComponent",
    "className": "LuApiSearcherComponent",
    "description": "",
    "selector": "lu-api-searcher",
    "inputs": [
      {
        "name": "api",
        "type": "string",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => T",
        "description": "a function to transform the item fetched from the api into the kind of item you want\r\nif you wnat to cast dates into moments for example"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clueControl",
        "type": "FormControl",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "searchInput",
        "type": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuApiPagedSearcherComponent": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.component.ts",
    "name": "LuApiPagedSearcherComponent",
    "className": "LuApiPagedSearcherComponent",
    "description": "",
    "selector": "lu-api-paged-searcher",
    "inputs": [
      {
        "name": "api",
        "type": "string",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => T",
        "description": "a function to transform the item fetched from the api into the kind of item you want\r\nif you wnat to cast dates into moments for example"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clueControl",
        "type": "FormControl",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "searchInput",
        "type": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuApiOptionSearcher": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "name": "ILuApiOptionSearcher",
    "className": "ILuApiOptionSearcher",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "name": "ILuApiSearcherService",
    "className": "ILuApiSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiOptionPagedSearcher": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "name": "ILuApiOptionPagedSearcher",
    "className": "ILuApiOptionPagedSearcher",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuApiPagedSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.model.ts",
    "name": "ILuApiPagedSearcherService",
    "className": "ILuApiPagedSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiSearcherModule": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.module.ts",
    "className": "LuApiSearcherModule",
    "name": "LuApiSearcherModule",
    "declarations": [
      "\r\n\t\tLuApiSearcherComponent",
      "\r\n\t\tLuApiPagedSearcherComponent"
    ],
    "exports": [
      "LuApiSearcherComponent",
      "LuApiPagedSearcherComponent"
    ]
  },
  "LuApiSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.service.ts",
    "className": "LuApiSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuApiPagedSearcherService": {
    "fileName": "libraries/core/src/lib/api/select/searcher/api-searcher.service.ts",
    "className": "LuApiPagedSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuClearer": {
    "fileName": "libraries/core/src/lib/input/clearer/clearer.model.ts",
    "name": "ILuClearer",
    "className": "ILuClearer",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onClear",
        "type": "Observable<T>",
        "description": ""
      }
    ]
  },
  "LuInputDisplayerDirective": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.directive.ts",
    "name": "LuInputDisplayerDirective",
    "className": "LuInputDisplayerDirective",
    "description": "",
    "selector": "[luDisplayer]",
    "inputs": [
      {
        "name": "luDisplayerMultiple",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "multiple",
        "type": "string | boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ILuInputDisplayer": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.model.ts",
    "name": "ILuInputDisplayer",
    "className": "ILuInputDisplayer",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "multiple",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "LuInputDisplayerModule": {
    "fileName": "libraries/core/src/lib/input/displayer/input-displayer.module.ts",
    "className": "LuInputDisplayerModule",
    "name": "LuInputDisplayerModule",
    "declarations": [
      "LuInputDisplayerDirective"
    ],
    "exports": [
      "LuInputDisplayerDirective"
    ]
  },
  "LuInputDirective": {
    "fileName": "libraries/core/src/lib/input/input.directive.ts",
    "name": "LuInputDirective",
    "className": "LuInputDirective",
    "description": "adds class is-filled when model is empty",
    "selector": "[luInput]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ILuInput": {
    "fileName": "libraries/core/src/lib/input/input.model.ts",
    "name": "ILuInput",
    "className": "ILuInput",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ILuInputWithPicker": {
    "fileName": "libraries/core/src/lib/input/input.model.ts",
    "name": "ILuInputWithPicker",
    "className": "ILuInputWithPicker",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuInputModule": {
    "fileName": "libraries/core/src/lib/input/input.module.ts",
    "className": "LuInputModule",
    "name": "LuInputModule",
    "declarations": [
      "LuInputDirective"
    ],
    "exports": [
      "LuInputDisplayerModule",
      "LuInputDirective"
    ]
  },
  "ILuPickerPanel": {
    "fileName": "libraries/core/src/lib/input/picker/input-picker.model.ts",
    "name": "ILuPickerPanel",
    "className": "ILuPickerPanel",
    "description": "",
    "methods": [
      {
        "name": "setValue",
        "description": "called to tell the picker what's the current value",
        "args": [
          {
            "name": "value",
            "type": "T | T[]"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "multiple",
        "type": "boolean",
        "description": "self explainatory"
      },
      {
        "name": "onSelectValue",
        "type": "Observable<T | T[]>",
        "description": "emits when a value was selected on the picker"
      }
    ]
  },
  "LuModule": {
    "fileName": "libraries/core/src/lib/module.ts",
    "className": "LuModule",
    "name": "LuModule",
    "declarations": [],
    "exports": [
      "LuApiModule",
      "LuInputModule",
      "LuNumberModule",
      "LuOptionModule",
      "LuPopoverModule",
      "LuSafeContentModule",
      "LuScrollModule",
      "LuSelectModule",
      "LuTooltipModule",
      "LuUserModule"
    ]
  },
  "LuNumberModule": {
    "fileName": "libraries/core/src/lib/number/number.module.ts",
    "className": "LuNumberModule",
    "name": "LuNumberModule",
    "declarations": [
      "LuNumberPipe"
    ],
    "exports": [
      "LuNumberPipe"
    ]
  },
  "LuNumberPipe": {
    "fileName": "libraries/core/src/lib/number/number.pipe.ts",
    "name": "LuNumberPipe",
    "className": "LuNumberPipe",
    "description": "",
    "pipeName": "luNumber",
    "input": {
      "name": "number",
      "type": "number"
    },
    "args": [
      {
        "name": "precision",
        "type": "number",
        "defaultValue": "2"
      }
    ],
    "inputs": [],
    "outputs": [],
    "methods": [],
    "properties": []
  },
  "LuOptionItemComponent": {
    "fileName": "libraries/core/src/lib/option/item/option-item.component.ts",
    "name": "LuOptionItemComponent",
    "className": "LuOptionItemComponent",
    "description": "",
    "selector": "lu-option",
    "inputs": [
      {
        "name": "value",
        "type": "T",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onSelect",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuOptionItem": {
    "fileName": "libraries/core/src/lib/option/item/option-item.model.ts",
    "name": "ILuOptionItem",
    "className": "ILuOptionItem",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onSelect",
        "type": "Observable<T>",
        "description": ""
      },
      {
        "name": "value",
        "type": "T",
        "description": ""
      }
    ]
  },
  "LuOptionItemModule": {
    "fileName": "libraries/core/src/lib/option/item/option-item.module.ts",
    "className": "LuOptionItemModule",
    "name": "LuOptionItemModule",
    "declarations": [
      "\r\n\t\tLuOptionItemComponent"
    ],
    "exports": [
      "LuOptionItemComponent"
    ]
  },
  "LuOptionFeederComponent": {
    "fileName": "libraries/core/src/lib/option/operator/feeder/option-feeder.component.ts",
    "name": "LuOptionFeederComponent",
    "className": "LuOptionFeederComponent",
    "description": "",
    "selector": "lu-option-feeder",
    "inputs": [
      {
        "name": "options",
        "type": "T[]",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "outOptions$",
        "type": "BehaviorSubject<T[]>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuOptionFeederModule": {
    "fileName": "libraries/core/src/lib/option/operator/feeder/option-feeder.module.ts",
    "className": "LuOptionFeederModule",
    "name": "LuOptionFeederModule",
    "declarations": [
      "\r\n\t\tLuOptionFeederComponent"
    ],
    "exports": [
      "LuOptionFeederComponent"
    ]
  },
  "LuForOptionsDirective": {
    "fileName": "libraries/core/src/lib/option/operator/for-options/for-options.directive.ts",
    "name": "LuForOptionsDirective",
    "className": "LuForOptionsDirective",
    "description": "",
    "selector": "[luForOptions]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuForOptionsModule": {
    "fileName": "libraries/core/src/lib/option/operator/for-options/for-options.module.ts",
    "className": "LuForOptionsModule",
    "name": "LuForOptionsModule",
    "declarations": [
      "\r\n\t\tLuForOptionsDirective"
    ],
    "exports": [
      "LuForOptionsDirective"
    ]
  },
  "ILuOptionOperator": {
    "fileName": "libraries/core/src/lib/option/operator/option-operator.model.ts",
    "name": "ILuOptionOperator",
    "className": "ILuOptionOperator",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "inOptions$",
        "type": "Observable<T[]>",
        "description": ""
      },
      {
        "name": "onClose",
        "type": "() => void",
        "description": ""
      },
      {
        "name": "onKeydown",
        "type": "(key: number) => void",
        "description": ""
      },
      {
        "name": "onOpen",
        "type": "() => void",
        "description": ""
      },
      {
        "name": "onScrollBottom",
        "type": "() => void",
        "description": ""
      },
      {
        "name": "outOptions$",
        "type": "Observable<T[]>",
        "description": ""
      }
    ]
  },
  "LuOptionOperatorModule": {
    "fileName": "libraries/core/src/lib/option/operator/option-operator.module.ts",
    "className": "LuOptionOperatorModule",
    "name": "LuOptionOperatorModule",
    "declarations": [],
    "exports": [
      "LuOptionPagerModule",
      "LuOptionFeederModule",
      "LuOptionSearcherModule",
      "LuForOptionsModule"
    ]
  },
  "LuOptionPagerComponent": {
    "fileName": "libraries/core/src/lib/option/operator/pager/option-pager.component.ts",
    "name": "LuOptionPagerComponent",
    "className": "LuOptionPagerComponent",
    "description": "",
    "selector": "lu-option-pager",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "paging$",
        "type": "BehaviorSubject<number>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuOptionPagerModule": {
    "fileName": "libraries/core/src/lib/option/operator/pager/option-pager.module.ts",
    "className": "LuOptionPagerModule",
    "name": "LuOptionPagerModule",
    "declarations": [
      "\r\n\t\tLuOptionPagerComponent"
    ],
    "exports": [
      "LuOptionPagerComponent"
    ]
  },
  "LuOptionSearcherComponent": {
    "fileName": "libraries/core/src/lib/option/operator/searcher/option-searcher.component.ts",
    "name": "LuOptionSearcherComponent",
    "className": "LuOptionSearcherComponent",
    "description": "",
    "selector": "lu-option-searcher",
    "inputs": [
      {
        "name": "searchFn",
        "type": "(option: T, clue: string) => boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clue$",
        "type": "Observable<any>",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "searchControl",
        "type": "FormControl",
        "description": ""
      },
      {
        "name": "searchInput",
        "type": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuOptionSearcherModule": {
    "fileName": "libraries/core/src/lib/option/operator/searcher/option-searcher.module.ts",
    "className": "LuOptionSearcherModule",
    "name": "LuOptionSearcherModule",
    "declarations": [
      "\r\n\t\tLuOptionSearcherComponent"
    ],
    "exports": [
      "LuOptionSearcherComponent"
    ]
  },
  "LuOptionModule": {
    "fileName": "libraries/core/src/lib/option/option.module.ts",
    "className": "LuOptionModule",
    "name": "LuOptionModule",
    "declarations": [],
    "exports": [
      "LuOptionItemModule",
      "LuOptionPickerModule",
      "LuOptionOperatorModule"
    ]
  },
  "LuOptionPickerComponent": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.component.ts",
    "name": "LuOptionPickerComponent",
    "className": "LuOptionPickerComponent",
    "description": "basic option picker panel",
    "selector": "lu-option-picker",
    "exportAs": "LuOptionPicker",
    "inputs": [
      {
        "name": "overlap-trigger",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "close",
        "description": ""
      },
      {
        "name": "onSelectValue",
        "description": "emits when a value was selected on the picker"
      },
      {
        "name": "open",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "highlightIndex",
        "type": "number",
        "description": ""
      },
      {
        "name": "optionsQLVR",
        "type": "QueryList<ViewContainerRef>",
        "description": ""
      }
    ],
    "methods": []
  },
  "ILuOptionPickerPanel": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.model.ts",
    "name": "ILuOptionPickerPanel",
    "className": "ILuOptionPickerPanel",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuOptionPickerModule": {
    "fileName": "libraries/core/src/lib/option/picker/option-picker.module.ts",
    "className": "LuOptionPickerModule",
    "name": "LuOptionPickerModule",
    "declarations": [
      "\r\n\t\tLuOptionPickerComponent"
    ],
    "exports": [
      "LuOptionPickerComponent"
    ]
  },
  "LuPopoverPanelComponent": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.component.ts",
    "name": "LuPopoverPanelComponent",
    "className": "LuPopoverPanelComponent",
    "description": "",
    "selector": "lu-popover",
    "exportAs": "LuPopoverPanel",
    "inputs": [
      {
        "name": "alignment",
        "type": "LuPopoverAlignment",
        "description": "Alignment of the popover regarding the trigger"
      },
      {
        "name": "classes",
        "type": "string",
        "description": "This method takes classes set on the host lu-popover element and applies them on the\npopover template that displays in the overlay container.  Otherwise, it's difficult\nto style the containing popover from outside the component."
      },
      {
        "name": "close-on-click",
        "type": "boolean",
        "description": "Popover container close on click\ndefault: false"
      },
      {
        "name": "enter-delay",
        "type": "number",
        "description": "Popover enter delay"
      },
      {
        "name": "focus-trap-enabled",
        "type": "boolean",
        "description": "Popover focus trap using cdkTrapFocus\ndefault: false"
      },
      {
        "name": "leave-delay",
        "type": "number",
        "description": "Popover leave delay"
      },
      {
        "name": "offset-x",
        "type": "number",
        "description": "Popover target offset x"
      },
      {
        "name": "offset-y",
        "type": "number",
        "description": "Popover target offset y"
      },
      {
        "name": "overlap-trigger",
        "type": "boolean",
        "description": "Popover overlap trigger"
      },
      {
        "name": "position",
        "type": "LuPopoverPosition",
        "description": "Position of the popover around the trigger"
      },
      {
        "name": "scroll-strategy",
        "type": "LuPopoverScrollStrategy",
        "description": "Popover scrollStrategy\ndefault: reposition"
      },
      {
        "name": "template",
        "type": "TemplateRef<any>",
        "description": "Template to Use for the popover"
      },
      {
        "name": "trigger-on",
        "type": "LuPopoverTriggerEvent",
        "description": "Popover trigger event"
      }
    ],
    "outputs": [
      {
        "name": "close",
        "description": "Event emitted when the popover is closed."
      },
      {
        "name": "open",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuPopoverPanel": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.model.ts",
    "name": "ILuPopoverPanel",
    "className": "ILuPopoverPanel",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "alignment",
        "type": "LuPopoverAlignment",
        "description": ""
      },
      {
        "name": "close",
        "type": "Observable<void>",
        "description": ""
      },
      {
        "name": "closeDisabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "closeOnClick",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "containerPositioning",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enterDelay",
        "type": "number",
        "description": ""
      },
      {
        "name": "keydownEvents$",
        "type": "Observable<KeyboardEvent>",
        "description": ""
      },
      {
        "name": "leaveDelay",
        "type": "number",
        "description": ""
      },
      {
        "name": "open",
        "type": "Observable<void>",
        "description": ""
      },
      {
        "name": "overlapTrigger",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "popoverPanelStyles",
        "type": "any",
        "description": ""
      },
      {
        "name": "position",
        "type": "LuPopoverPosition",
        "description": ""
      },
      {
        "name": "scrollStrategy",
        "type": "LuPopoverScrollStrategy",
        "description": ""
      },
      {
        "name": "setPositionClasses",
        "type": "(pos: LuPopoverPosition, al: LuPopoverAlignment) => void",
        "description": ""
      },
      {
        "name": "setPositionClassesChanges",
        "type": "(posX: LuPopoverPosition, posY: LuPopoverPosition) => void",
        "description": ""
      },
      {
        "name": "targetOffsetX",
        "type": "number",
        "description": ""
      },
      {
        "name": "targetOffsetY",
        "type": "number",
        "description": ""
      },
      {
        "name": "templateRef",
        "type": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "triggerEvent",
        "type": "LuPopoverTriggerEvent",
        "description": ""
      }
    ]
  },
  "ALuPopoverPanel": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.model.ts",
    "className": "ALuPopoverPanel",
    "description": "abstract class for basic implementation of a popover panel\r\nit is highly recommended to use this template\r\n<ng-template>\r\n<div class=\"lu-popover-panel\" role=\"dialog\" [class.lu-popover-overlap]=\"overlapTrigger\" [ngClass]=\"_classList\" [ngStyle]=\"popoverPanelStyles\"\r\n(keydown)=\"_handleKeydown($event)\" (click)=\"onClick()\" (mouseover)=\"onMouseOver()\" (mouseleave)=\"onMouseLeave()\" (mousedown)=\"onMouseDown($event)\"\r\n[@transformPopover]=\"'enter'\">\r\n<div class=\"lu-popover-content\" [ngStyle]=\"popoverContentStyles\" cdkTrapFocus=\"focusTrapEnabled\">\r\n### PUT HERE THE CONTENT OF THE POPOVER ###\r\n</div>\r\n</div>\r\n</ng-template>",
    "methods": [
      {
        "name": "onMouseOver",
        "description": "TODO: Refactor when @angular/cdk includes feature I mentioned on github see link below.\r\nhttps://github.com/angular/material2/pull/5493#issuecomment-313085323\nDisables close of popover when leaving trigger element and mouse over the popover",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "onMouseLeave",
        "description": "Enables close of popover when mouse leaving popover element",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "onMouseDown",
        "description": "does nothing but must be overridable",
        "args": [
          {
            "name": "$event",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "alignment",
        "type": "LuPopoverAlignment",
        "description": ""
      },
      {
        "name": "classList",
        "type": "any",
        "description": ""
      },
      {
        "name": "close",
        "type": "Observable<void>",
        "description": ""
      },
      {
        "name": "closeDisabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "closeOnClick",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "containerPositioning",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enterDelay",
        "type": "number",
        "description": ""
      },
      {
        "name": "focusTrapEnabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isOpen",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "leaveDelay",
        "type": "number",
        "description": ""
      },
      {
        "name": "open",
        "type": "Observable<void>",
        "description": ""
      },
      {
        "name": "overlapTrigger",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "popoverContentStyles",
        "type": "any",
        "description": ""
      },
      {
        "name": "popoverPanelStyles",
        "type": "any",
        "description": ""
      },
      {
        "name": "position",
        "type": "LuPopoverPosition",
        "description": ""
      },
      {
        "name": "scrollStrategy",
        "type": "LuPopoverScrollStrategy",
        "description": ""
      },
      {
        "name": "targetOffsetX",
        "type": "number",
        "description": ""
      },
      {
        "name": "targetOffsetY",
        "type": "number",
        "description": ""
      },
      {
        "name": "templateRef",
        "type": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "triggerEvent",
        "type": "LuPopoverTriggerEvent",
        "description": ""
      }
    ]
  },
  "LuPopoverPanelModule": {
    "fileName": "libraries/core/src/lib/popover/panel/popover-panel.module.ts",
    "className": "LuPopoverPanelModule",
    "name": "LuPopoverPanelModule",
    "declarations": [
      "\r\n\t\tLuPopoverPanelComponent"
    ],
    "exports": [
      "LuPopoverPanelComponent"
    ]
  },
  "LuPopoverModule": {
    "fileName": "libraries/core/src/lib/popover/popover.module.ts",
    "className": "LuPopoverModule",
    "name": "LuPopoverModule",
    "declarations": [],
    "exports": [
      "LuPopoverPanelModule",
      "LuPopoverTargetModule",
      "LuPopoverTriggerModule"
    ]
  },
  "LuPopoverTargetDirective": {
    "fileName": "libraries/core/src/lib/popover/target/popover-target.directive.ts",
    "name": "LuPopoverTargetDirective",
    "className": "LuPopoverTargetDirective",
    "description": "",
    "selector": "lu-popover-target, [luPopoverTarget]",
    "exportAs": "LuPopoverTarget",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ILuPopoverTarget": {
    "fileName": "libraries/core/src/lib/popover/target/popover-target.model.ts",
    "name": "ILuPopoverTarget",
    "className": "ILuPopoverTarget",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "_elementRef",
        "type": "ElementRef<any>",
        "description": ""
      }
    ]
  },
  "LuPopoverTargetModule": {
    "fileName": "libraries/core/src/lib/popover/target/popover-target.module.ts",
    "className": "LuPopoverTargetModule",
    "name": "LuPopoverTargetModule",
    "declarations": [
      "\r\n\t\tLuPopoverTargetDirective"
    ],
    "exports": [
      "LuPopoverTargetDirective"
    ]
  },
  "LuPopoverTriggerDirective": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.directive.ts",
    "name": "LuPopoverTriggerDirective",
    "className": "LuPopoverTriggerDirective",
    "description": "This directive is intended to be used in conjunction with an lu-popover tag.  It is\nresponsible for toggling the display of the provided popover instance.",
    "selector": "[luPopoverTriggerFor]",
    "exportAs": "LuPopoverTrigger",
    "inputs": [
      {
        "name": "luPopoverTargetAt",
        "type": "ILuPopoverTarget",
        "description": "References the popover target instance that the trigger is associated with."
      },
      {
        "name": "luPopoverTriggerFor",
        "type": "T",
        "description": "References the popover instance that the trigger is associated with."
      }
    ],
    "outputs": [
      {
        "name": "onPopoverClose",
        "description": "Event emitted when the associated popover is closed."
      },
      {
        "name": "onPopoverOpen",
        "description": "Event emitted when the associated popover is opened."
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuPopoverTrigger": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.model.ts",
    "name": "ILuPopoverTrigger",
    "className": "ILuPopoverTrigger",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "popover",
        "type": "T",
        "description": ""
      }
    ]
  },
  "LuPopoverTriggerModule": {
    "fileName": "libraries/core/src/lib/popover/trigger/popover-trigger.module.ts",
    "className": "LuPopoverTriggerModule",
    "name": "LuPopoverTriggerModule",
    "declarations": [
      "\r\n\t\tLuPopoverTriggerDirective"
    ],
    "exports": [
      "LuPopoverTriggerDirective"
    ]
  },
  "LuSafeContentModule": {
    "fileName": "libraries/core/src/lib/safe-content/safe-content.module.ts",
    "className": "LuSafeContentModule",
    "name": "LuSafeContentModule",
    "declarations": [
      "LuSafeContentPipe"
    ],
    "exports": [
      "LuSafeContentPipe"
    ]
  },
  "LuSafeContentPipe": {
    "fileName": "libraries/core/src/lib/safe-content/safe-content.pipe.ts",
    "name": "LuSafeContentPipe",
    "className": "LuSafeContentPipe",
    "description": "",
    "pipeName": "luSafeContent",
    "input": {
      "name": "value",
      "type": "any"
    },
    "args": [
      {
        "name": "type",
        "type": "LuSafeContentType",
        "defaultValue": "html"
      }
    ],
    "inputs": [],
    "outputs": [],
    "methods": [],
    "properties": []
  },
  "LuScrollDirective": {
    "fileName": "libraries/core/src/lib/scroll/scroll.directive.ts",
    "name": "LuScrollDirective",
    "className": "LuScrollDirective",
    "description": "emits on scroll events",
    "selector": "[luScroll]",
    "exportAs": "luScroll",
    "inputs": [
      {
        "name": "debounceTime",
        "defaultValue": "100",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onScroll",
        "description": ""
      },
      {
        "name": "onScrollBottom",
        "description": ""
      },
      {
        "name": "onScrollLeft",
        "description": ""
      },
      {
        "name": "onScrollRight",
        "description": ""
      },
      {
        "name": "onScrollTop",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ILuScrollable": {
    "fileName": "libraries/core/src/lib/scroll/scroll.model.ts",
    "name": "ILuScrollable",
    "className": "ILuScrollable",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "onScroll",
        "type": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollBottom",
        "type": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollLeft",
        "type": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollRight",
        "type": "Observable<Event>",
        "description": ""
      },
      {
        "name": "onScrollTop",
        "type": "Observable<Event>",
        "description": ""
      }
    ]
  },
  "LuScrollModule": {
    "fileName": "libraries/core/src/lib/scroll/scroll.module.ts",
    "className": "LuScrollModule",
    "name": "LuScrollModule",
    "declarations": [
      "\r\n\t\tLuScrollDirective"
    ],
    "exports": [
      "LuScrollDirective"
    ]
  },
  "LuSelectClearerComponent": {
    "fileName": "libraries/core/src/lib/select/clearer/select-clearer.component.ts",
    "name": "LuSelectClearerComponent",
    "className": "LuSelectClearerComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-select-clearer",
    "exportAs": "luClearer",
    "inputs": [],
    "outputs": [
      {
        "name": "onClear",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "LuSelectClearerModule": {
    "fileName": "libraries/core/src/lib/select/clearer/select-clearer.module.ts",
    "className": "LuSelectClearerModule",
    "name": "LuSelectClearerModule",
    "declarations": [
      "\r\n\t\tLuSelectClearerComponent"
    ],
    "exports": [
      "LuSelectClearerComponent"
    ]
  },
  "LuSelectInputComponent": {
    "fileName": "libraries/core/src/lib/select/input/select-input.component.ts",
    "name": "LuSelectInputComponent",
    "className": "LuSelectInputComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-select",
    "inputs": [
      {
        "name": "multiple",
        "type": "string | boolean",
        "description": ""
      },
      {
        "name": "placeholder",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clearerEltRef",
        "type": "ElementRef<any>",
        "description": ""
      },
      {
        "name": "isClearable",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isFocused",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "modMultiple",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "modMultipleView",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "suffixEltRef",
        "type": "ElementRef<any>",
        "description": ""
      },
      {
        "name": "tabindex",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuSelectInputModule": {
    "fileName": "libraries/core/src/lib/select/input/select-input.module.ts",
    "className": "LuSelectInputModule",
    "name": "LuSelectInputModule",
    "declarations": [
      "\r\n\t\tLuSelectInputComponent"
    ],
    "exports": [
      "LuSelectInputComponent"
    ]
  },
  "LuSelectModule": {
    "fileName": "libraries/core/src/lib/select/select.module.ts",
    "className": "LuSelectModule",
    "name": "LuSelectModule",
    "declarations": [],
    "exports": [
      "LuSelectInputModule",
      "LuSelectClearerModule"
    ]
  },
  "LuTooltipPanelComponent": {
    "fileName": "libraries/core/src/lib/tooltip/panel/tooltip-panel.component.ts",
    "name": "LuTooltipPanelComponent",
    "className": "LuTooltipPanelComponent",
    "description": "",
    "selector": "lu-tooltip-panel",
    "inputs": [
      {
        "name": "content",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "close",
        "description": ""
      },
      {
        "name": "open",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "animationState",
        "defaultValue": "enter",
        "type": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuTooltipPanelModule": {
    "fileName": "libraries/core/src/lib/tooltip/panel/tooltip-panel.module.ts",
    "className": "LuTooltipPanelModule",
    "name": "LuTooltipPanelModule",
    "declarations": [
      "\n\t\tLuTooltipPanelComponent"
    ],
    "exports": [
      "LuTooltipPanelComponent"
    ]
  },
  "LuTooltipModule": {
    "fileName": "libraries/core/src/lib/tooltip/tooltip.module.ts",
    "className": "LuTooltipModule",
    "name": "LuTooltipModule",
    "declarations": [],
    "exports": [
      "LuTooltipTriggerModule",
      "LuTooltipPanelModule"
    ]
  },
  "LuTooltipTriggerDirective": {
    "fileName": "libraries/core/src/lib/tooltip/trigger/tooltip-trigger.directive.ts",
    "name": "LuTooltipTriggerDirective",
    "className": "LuTooltipTriggerDirective",
    "description": "",
    "selector": "[luTooltip]",
    "inputs": [
      {
        "name": "enterDelay",
        "defaultValue": "300",
        "type": "number",
        "description": ""
      },
      {
        "name": "leaveDelay",
        "defaultValue": "100",
        "type": "number",
        "description": ""
      },
      {
        "name": "luTooltip",
        "type": "any",
        "description": ""
      },
      {
        "name": "luTooltipDisabled",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": [
      {
        "name": "_getOverlayConfig",
        "description": "This method builds the configuration object needed to create the overlay, the OverlayConfig.",
        "args": [],
        "returnType": "OverlayConfig"
      },
      {
        "name": "_createOverlay",
        "description": "This method creates the overlay from the provided popover's template and saves its\r\nOverlayRef so that it can be attached to the DOM when openPopover is called.",
        "args": [],
        "returnType": "OverlayRef"
      },
      {
        "name": "openPopover",
        "description": "Opens the popover.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "LuTooltipTriggerModule": {
    "fileName": "libraries/core/src/lib/tooltip/trigger/tooltip-trigger.module.ts",
    "className": "LuTooltipTriggerModule",
    "name": "LuTooltipTriggerModule",
    "declarations": [
      "\n\t\tLuTooltipTriggerDirective"
    ],
    "exports": [
      "LuTooltipTriggerDirective"
    ]
  },
  "LuUserDisplayModule": {
    "fileName": "libraries/core/src/lib/user/display/user-display.module.ts",
    "className": "LuUserDisplayModule",
    "name": "LuUserDisplayModule",
    "declarations": [
      "LuUserDisplayPipe"
    ],
    "exports": [
      "LuUserDisplayPipe"
    ]
  },
  "LuUserDisplayPipe": {
    "fileName": "libraries/core/src/lib/user/display/user-display.pipe.ts",
    "name": "LuUserDisplayPipe",
    "className": "LuUserDisplayPipe",
    "description": "Displays a user name according to specified format. Supported formats: f for first name,\nF for first initial, l for last name, L for last initial.",
    "pipeName": "luUserDisplay",
    "input": {
      "name": "user",
      "type": "IUser"
    },
    "args": [
      {
        "name": "format",
        "type": "LuDisplayFormat"
      }
    ],
    "inputs": [],
    "outputs": [],
    "methods": [],
    "properties": []
  },
  "LuUserPictureComponent": {
    "fileName": "libraries/core/src/lib/user/picture/user-picture.component.ts",
    "name": "LuUserPictureComponent",
    "className": "LuUserPictureComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-user-picture",
    "inputs": [
      {
        "name": "displayFormat",
        "type": "LuDisplayInitials",
        "description": "User Display format.\nIt is set to 'FL' by default"
      },
      {
        "name": "user",
        "type": "IUser",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "displayFormat",
        "type": "LuDisplayInitials",
        "description": "User Display format.\nIt is set to 'FL' by default"
      },
      {
        "name": "hasPicture",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "initials",
        "type": "string",
        "description": ""
      },
      {
        "name": "style",
        "type": "any",
        "description": ""
      },
      {
        "name": "user",
        "type": "IUser",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuUserPictureModule": {
    "fileName": "libraries/core/src/lib/user/picture/user-picture.module.ts",
    "className": "LuUserPictureModule",
    "name": "LuUserPictureModule",
    "declarations": [
      "LuUserPictureComponent"
    ],
    "exports": [
      "LuUserPictureComponent"
    ]
  },
  "LuUserSelectInputComponent": {
    "fileName": "libraries/core/src/lib/user/select/input/user-select-input.component.ts",
    "name": "LuUserSelectInputComponent",
    "className": "LuUserSelectInputComponent",
    "description": "Displays user'picture or a placeholder with his/her initials and random bg color'",
    "selector": "lu-user-select",
    "inputs": [
      {
        "name": "appInstanceId",
        "type": "string | number",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "multiple",
        "type": "string | boolean",
        "description": ""
      },
      {
        "name": "operations",
        "type": "number[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "placeholder",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => U",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "isDisabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isFocused",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "searchFormat",
        "type": "LuDisplayFullname",
        "description": ""
      },
      {
        "name": "tabindex",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "onClick",
        "description": "bind to dom events",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "LuUserSelectInputModule": {
    "fileName": "libraries/core/src/lib/user/select/input/user-select-input.module.ts",
    "className": "LuUserSelectInputModule",
    "name": "LuUserSelectInputModule",
    "declarations": [
      "\r\n\t\tLuUserSelectInputComponent"
    ],
    "exports": [
      "LuUserSelectInputComponent"
    ]
  },
  "LuUserPagedSearcherComponent": {
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.component.ts",
    "name": "LuUserPagedSearcherComponent",
    "className": "LuUserPagedSearcherComponent",
    "description": "",
    "selector": "lu-user-paged-searcher",
    "inputs": [
      {
        "name": "appInstanceId",
        "type": "string | number",
        "description": ""
      },
      {
        "name": "fields",
        "type": "string",
        "description": ""
      },
      {
        "name": "filters",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "operations",
        "type": "number[]",
        "description": ""
      },
      {
        "name": "orderBy",
        "type": "string",
        "description": ""
      },
      {
        "name": "transformFn",
        "type": "(item: any) => U",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "clueControl",
        "type": "FormControl",
        "description": ""
      },
      {
        "name": "fixed",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "searchInput",
        "type": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuUserSearcherModule": {
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.module.ts",
    "className": "LuUserSearcherModule",
    "name": "LuUserSearcherModule",
    "declarations": [
      "\r\n\t\tLuUserPagedSearcherComponent"
    ],
    "exports": [
      "LuUserPagedSearcherComponent"
    ]
  },
  "LuUserPagedSearcherService": {
    "fileName": "libraries/core/src/lib/user/select/searcher/user-searcher.service.ts",
    "className": "LuUserPagedSearcherService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "LuUserSelectModule": {
    "fileName": "libraries/core/src/lib/user/select/user-select.module.ts",
    "className": "LuUserSelectModule",
    "name": "LuUserSelectModule",
    "declarations": [],
    "exports": [
      "LuUserSelectInputModule",
      "LuUserSearcherModule"
    ]
  },
  "LuUserTileComponent": {
    "fileName": "libraries/core/src/lib/user/tile/user-tile.component.ts",
    "name": "LuUserTileComponent",
    "className": "LuUserTileComponent",
    "description": "Displays user picture and name. IUser's role can be specified, and the footer is customizable.",
    "selector": "lu-user-tile",
    "inputs": [
      {
        "name": "displayFormat",
        "type": "LuDisplayFormat",
        "description": "User Display format.\nIt is set to 'lf' by default"
      },
      {
        "name": "role",
        "type": "string",
        "description": "IUser role to display"
      },
      {
        "name": "user",
        "type": "IUser",
        "description": "IUser to display."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "displayPictureFormat",
        "type": "LuDisplayInitials",
        "description": ""
      },
      {
        "name": "role",
        "type": "string",
        "description": "IUser role to display"
      },
      {
        "name": "user",
        "type": "IUser",
        "description": "IUser to display."
      }
    ],
    "methods": []
  },
  "LuUserTileModule": {
    "fileName": "libraries/core/src/lib/user/tile/user-tile.module.ts",
    "className": "LuUserTileModule",
    "name": "LuUserTileModule",
    "declarations": [
      "LuUserTileComponent"
    ],
    "exports": [
      "LuUserTileComponent"
    ]
  },
  "IUser": {
    "fileName": "libraries/core/src/lib/user/user.model.ts",
    "name": "IUser",
    "className": "IUser",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "firstName",
        "type": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "type": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "type": "string",
        "description": ""
      },
      {
        "name": "picture",
        "type": "{ href: string; }",
        "description": ""
      }
    ]
  },
  "LuUserModule": {
    "fileName": "libraries/core/src/lib/user/user.module.ts",
    "className": "LuUserModule",
    "name": "LuUserModule",
    "declarations": [],
    "exports": [
      "LuUserDisplayModule",
      "LuUserPictureModule",
      "LuUserTileModule",
      "LuUserSelectModule"
    ]
  },
  "LuFormlyModule": {
    "fileName": "libraries/formly/src/lib/formly.module.ts",
    "className": "LuFormlyModule",
    "name": "LuFormlyModule",
    "declarations": [
      "...LU_FORMLY_COMPONENTS"
    ],
    "exports": []
  },
  "LuFormlyFieldApi": {
    "fileName": "libraries/formly/src/lib/types/api.ts",
    "name": "LuFormlyFieldApi",
    "className": "LuFormlyFieldApi",
    "description": "",
    "selector": "lu-formly-field-api",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "_api",
        "type": "any",
        "description": ""
      },
      {
        "name": "_filters",
        "type": "any",
        "description": ""
      },
      {
        "name": "_orderBy",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldCheckboxes": {
    "fileName": "libraries/formly/src/lib/types/checkboxes.ts",
    "name": "LuFormlyFieldCheckboxes",
    "className": "LuFormlyFieldCheckboxes",
    "description": "",
    "selector": "lu-formly-field-checkboxes",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldDate": {
    "fileName": "libraries/formly/src/lib/types/date.ts",
    "name": "LuFormlyFieldDate",
    "className": "LuFormlyFieldDate",
    "description": "",
    "selector": "lu-formly-field-date",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "input",
        "type": "ElementRef<any>",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldInput": {
    "fileName": "libraries/formly/src/lib/types/input.ts",
    "name": "LuFormlyFieldInput",
    "className": "LuFormlyFieldInput",
    "description": "",
    "selector": "lu-formly-field-input",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldRadios": {
    "fileName": "libraries/formly/src/lib/types/radios.ts",
    "name": "LuFormlyFieldRadios",
    "className": "LuFormlyFieldRadios",
    "description": "",
    "selector": "lu-formly-field-radios",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "_options",
        "type": "any[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldSelect": {
    "fileName": "libraries/formly/src/lib/types/select.ts",
    "name": "LuFormlyFieldSelect",
    "className": "LuFormlyFieldSelect",
    "description": "",
    "selector": "lu-formly-field-select",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "_options",
        "type": "any[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyFieldTextarea": {
    "fileName": "libraries/formly/src/lib/types/textarea.ts",
    "name": "LuFormlyFieldTextarea",
    "className": "LuFormlyFieldTextarea",
    "description": "",
    "selector": "lu-formly-field-input",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyFieldUser": {
    "fileName": "libraries/formly/src/lib/types/user.ts",
    "name": "LuFormlyFieldUser",
    "className": "LuFormlyFieldUser",
    "description": "",
    "selector": "lu-formly-field-user",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "LuFormlyWrapperError": {
    "fileName": "libraries/formly/src/lib/wrappers/error.ts",
    "name": "LuFormlyWrapperError",
    "className": "LuFormlyWrapperError",
    "description": "",
    "selector": "lu-formly-wrapper-error",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      },
      {
        "name": "validationId",
        "type": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyErrorMessage": {
    "fileName": "libraries/formly/src/lib/wrappers/error.ts",
    "name": "LuFormlyErrorMessage",
    "className": "LuFormlyErrorMessage",
    "description": "",
    "selector": "lu-formly-error-message",
    "inputs": [
      {
        "name": "field",
        "type": "FormlyFieldConfig",
        "description": ""
      },
      {
        "name": "fieldForm",
        "type": "FormControl",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "errorMessages",
        "type": "string[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperHelper": {
    "fileName": "libraries/formly/src/lib/wrappers/helper.ts",
    "name": "LuFormlyWrapperHelper",
    "className": "LuFormlyWrapperHelper",
    "description": "",
    "selector": "lu-formly-wrapper-helper",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperIcon": {
    "fileName": "libraries/formly/src/lib/wrappers/icon.ts",
    "name": "LuFormlyWrapperIcon",
    "className": "LuFormlyWrapperIcon",
    "description": "",
    "selector": "lu-formly-wrapper-suffix",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperLabel": {
    "fileName": "libraries/formly/src/lib/wrappers/label.ts",
    "name": "LuFormlyWrapperLabel",
    "className": "LuFormlyWrapperLabel",
    "description": "",
    "selector": "lu-formly-wrapper-label",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperRadiosfieldLayout": {
    "fileName": "libraries/formly/src/lib/wrappers/radiosfield-layout.ts",
    "name": "LuFormlyWrapperRadiosfieldLayout",
    "className": "LuFormlyWrapperRadiosfieldLayout",
    "description": "",
    "selector": "lu-formly-wrapper-radiosfield-layout",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      },
      {
        "name": "isError",
        "type": "\"\" | \"is-error\"",
        "description": ""
      },
      {
        "name": "isFocused",
        "type": "\"\" | \"is-focused\"",
        "description": ""
      },
      {
        "name": "isRequired",
        "type": "\"\" | \"is-required\"",
        "description": ""
      },
      {
        "name": "mod",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperSuffix": {
    "fileName": "libraries/formly/src/lib/wrappers/suffix.ts",
    "name": "LuFormlyWrapperSuffix",
    "className": "LuFormlyWrapperSuffix",
    "description": "",
    "selector": "lu-formly-wrapper-suffix",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperTextfieldLayout": {
    "fileName": "libraries/formly/src/lib/wrappers/textfield-layout.ts",
    "name": "LuFormlyWrapperTextfieldLayout",
    "className": "LuFormlyWrapperTextfieldLayout",
    "description": "",
    "selector": "lu-formly-wrapper-layout",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      },
      {
        "name": "isError",
        "type": "\"\" | \"is-error\"",
        "description": ""
      },
      {
        "name": "isFocused",
        "type": "\"\" | \"is-focused\"",
        "description": ""
      },
      {
        "name": "isRequired",
        "type": "\"\" | \"is-required\"",
        "description": ""
      },
      {
        "name": "mod",
        "type": "any",
        "description": ""
      },
      {
        "name": "modMultiline",
        "type": "\"\" | \"mod-multiline\"",
        "description": ""
      },
      {
        "name": "modWithSuffix",
        "type": "\"\" | \"mod-withSuffix\"",
        "description": ""
      }
    ],
    "methods": []
  },
  "LuFormlyWrapperTitle": {
    "fileName": "libraries/formly/src/lib/wrappers/title.ts",
    "name": "LuFormlyWrapperTitle",
    "className": "LuFormlyWrapperTitle",
    "description": "",
    "selector": "lu-formly-wrapper-title",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "fieldComponent",
        "type": "ViewContainerRef",
        "description": ""
      }
    ],
    "methods": []
  }
};

export default API_DOCS;