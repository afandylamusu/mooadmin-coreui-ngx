# Mooadmin-coreui-ngx
Mooadmin Core UI is extended shared library for Core UI, focused on view such as Form, Table, Report & Chart.

## Table of Contents
* [Getting Started](#getting-started)
* [Usage](#usage)
* [What's included](#whats-included)
* [Active Record](#active-record)
* [Views](#Views)
* [Form View](#form-view)
* [List View](#list-view)
* [Table View](#table-view)
* [Chart View](#chart-view)
* [Report View](#report-view)
* [Creators](#creators)

## Getting Started
### Installation

``` bash
# clone the repo
$ git clone 
https://github.com/afandylamusu/mooadmin-coreui-ngx.git 

# go into app's directory
$ cd mooadmin-coreui-ngx

# install app's dependencies
$ npm install
```

## Usage

``` bash
# serve with hot reload at localhost:4200.
$ ng serve

# build for production with minification
$ ng build
```

## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
mooadmin-coreui-ngx/
├── .vscode/
├── e2e/
├── FProject/
├── node_modules/
├── src/
│   ├── app
|       ├── containers/
|       ├── views
|           ├── mooadmin
|               ├── contact
|                   ├── contact.component.html
|                   ├── contact.component.ts
|               ├── moo-demo-routing.module
|               ├── moo-demo.module.ts
|               └── ...
|          └── ...
|       ├── app.component.html
|       ├── app.component.ts
|       ├── app.component.css
|       ├── app.module.ts
|       ├── app.routing.ts
|       └── ...
│   ├── assets/
│   ├── environments/
|   ├── lib
|       ├── mooadmin-ngx
|           ├── moo-field
|               ├── moo-field.component
|               ├── moo-field-boolean.component.ts
|               ├── moo-field-boolean.component.html
|               ├── moo-field-string.component.ts
|               ├── moo-field-string.component.html
|           ├── moo-vchart/
|               ├── moo-vchart.component.html
|               ├── moo-vchart.component.ts
|           ├── moo-vform/
|               ├── moo-vform.component.html
|               ├── moo-vform.component.ts
|           ├── moo-vlist/
|               ├── moo-vlist.component.html
|               ├── moo-vlist.component.ts
|           ├── moo-vtable/
|               ├── moo-table.component.html
|               ├── moo-vtable.component.ts
|           ├── active-record
|           ├── dictionary
|           ├── field-types
|           ├── mooadmin.module   
│   ├── scss/
|   ├── services
|       ├── contact.service.ts
|       ├── contact.ts
│   ├── index.html
│   └── ...
├── .angular.json
├── ...
├── package.json
└── ...
```

## Active Record

Active Record is a helper library for connect API in your client Angular 4 Application.

### Active Record
`Class`  
A class that contains modelSchema, URL API and some methods of CRUD data. 

#### Properties
| Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| modelSchema           |  **modelSchema: Dictionary<Field> = {}**<br/> Schema for the input fields. You can set the input fields on Contact Service.                                           |
| api_url          |  URL for connect to API. You can set on Contact Service <br/> *Type : String*                      |
| _config         |     Variable name of interface IBApiConfig. **_config: IBApiConfig**                   |

#### Methods
| Methods       | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| findAll          |   **findAll(params: any)** <br/> Get all data  <br/> *Type: any*                                                                                       |
| findAllODataQuery |      **findAllODataQuery(params: ODataQuery):Observable<T[]>** ,<br/> Get all data <br/> *Type: Observable*                  |
| search            |    **search (data: any,api_search_name: string):Observable<T[]>** <br/> Search <br/> *Type: Observable*                   |
| find   |  **find(id: any): Observable<T>** <br/> Get data by id <br/> *Type: Observable* |
| update        |  **update(id: any, data: any)** <br/> Update data by id <br/> *Type: any*                                                                                       |
| insert  | **insert(data: any)** <br/> Insert data   <br/> *Type: any*                        |
| delete      |  **delete(data: any)** <br/> Delete data by id  <br/> *Type: any*                                  |
| generateParam     | **generateParam(params: any)** <br/>                 |
| generateParamODataQuery |**generateParamODataQuery(query: ODataQuery)** <br/>                            |
| processData        |    **processData(res: Response)** <br/> Create response instance from provided values to return body as parsed JSON object.                 |
| handleError      |    **handleError(error: any)** <br/> Handle any error that occurred <br/> *Type: any*                  |


### ApiConfig
 `Class`
<br/> A class that declare coonfig, urlAPI, and methodHttp.
#### Properties
| Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| config            |  Variable name for configuration of API, headers and methods *Type : any*                                                                                          |
| urlAPI           |  Variable name  for configuration of URL API *Type : String*                                                                                          |
| headers            |  *Type : any*                                                                                          |
| methods            | **defaultMethods: MethodHttp**                                                                                         |
| query            |  Get all data by String 'get' <br/> *Type : String*                                                                                          |
| update           |  Update data by String 'put' on API <br/> *Type : String*                      |
| insert          |   Insert data String 'post'<br/> *Type : String*                      |
| delete | Delete data by String 'delete'<br/> *Type: String*                           |

#### Methods
| Methods     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| getConfig            | **getConfig()**<br/> Return configuration of URL API, headers and methods                                                                                          |

### IBAConfig
 `Interface`
 #### Properties
| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| urlAPI           |        *Type : String*                                                                                 |
| headers           |        *Type : any*                                                                                 |
| methods           |        **methods: MethodHttp**                                                                              |

### MethodHttp
 `Interface`
 #### Properties
| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| query          |        *Type : String*                                                                                 |
| update          |        *Type : String*                                                                                 |
| insert          |       *Type : String*                                                                               |
| delete          |        *Type : String*                                                                               |
| method: String          |      *Type : String*                                                                               |


### ODataQuery
 `Interface`

 #### Properties
| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| top         |        *Type : number*                                                                                 |
| skip         |        *Type : number*                                                                                 |
| filter          |       *Type : String*                                                                               |
| expand         |        *Type : String*                                                                               |
### Contact Service
`Injectable`
<br/> A service to set URL API and model schema of fields as needed.
#### Properties
| Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| api_url          |  URL for connect to API <br/> *Type : String*                      |
| modelSchema           |  **modelSchema[]** <br/> Schema for the input fields .                                             |

## Views
 ## Form View
 A view of form for template Core UI.
 <br/>**How to use:**<br/>
  Add tag `moo-vform` <moo-vform> on template Core UI

  ### MooVForm
  `Component Class` <br/>
  A component class that makes it easy to create form.
  
   #### Selector
   moo-vform

   #### Input 

| Input   | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| callback       |  **callback :Function** <br/> Function for bind the input from template for tag moo-vform to MoovformComponent.|

   #### Properties

| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| modelSchema        |  **modelSchema:Dictionary<Field>** <br/> Schema for the input fields .                                                       |
| @ViewChild(ngForm)       |    **ngForm: NgForm** <br/>Query for a VIEW child of type NgForm                                                             |

   #### Methods

  | Methods    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
|     formSubmit        |    **formSubmit ( f: NgForm)**<br/> A method that used on moo-vform.component.html for submit all value from form.                                                                |
|     postContact      |    **postContact ( contact: Contact)**<br/> A method to insert data contact.                                                                 |
|    ngAfterViewInit    |     A callback method that is invoked immediately after Angular has completed initialization of a component's view. It is invoked only once when the view is instantiated.                                                                      |
|        ngOnInit       |      A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.                                                                     |   
 
  ### MooField
  `Component Class`
  <br/>  A component class that represents an individual field with variable `name`as name of field.

   #### Selector 
   moo-field

   #### Inputs
   | Input    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| name        |    The name of field<br/>*Type: String*.                                                               |
  
   #### Properties
  | Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| _stringFieldInputTypes        |   **_stringFieldInputTypes: String[]**<br/> Type of string input field in array. There are text, number, textarea, email, password.<br/>                                                                 |
| _boolFieldInputTypes        |   **_boolFieldInputTypes: String[]**<br/> Type of boolean input field . There are combobox, checkbox,radio.<br/>                                                                 |
| config         |   **config: Field**<br/> Variable name for interface Field <br/>                                                                 |
| form   |  **form: MooVformComponent**<br/>Initialize dependencies of MooVformComponent on property name `form`                                                                |

   #### Methods
 | Methods     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| isStringField   |   **get isStringField(): boolean**<br/> Return *_stringFieldInputTypes*                                                              |
| isBoolField   |   **get isStringField(): boolean**<br/> Return *_boolFieldInputTypes*                                                              |
|  ngOnInit    |   A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.<br/>Return *modelSchema* .                                                                             |

   
  ### MooFieldStringComponent
   `Component Class`
   #### Selector
   moo-field-string
   
   #### Properties
   | Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
|model     |  **model: NgModel** <br/> to get name of input field.                                       |
| value       |  to binding NgModel of text area. *Type: String*                                                                    |
| _config       |  Initialize variable name `_config` for interface StringField.                                                                  |
| _hasError       |   Whether Field has error <br/>*Type: boolean*                                                                   | 
| _errorMessage       |  Initialize variable name `_errorMessage` for error message in input type such as required, minimal length of input, and email pattern.           <br/>*Type: any*                                                                   | 
| required       | Whether Field is required.                                                                   | 
| minlength    | String has min length.                                                                  | 
| emailPattern   | Check  email pattern in String input.                                                                  || field   |       Initialize dependencies of MooFieldComponent on property name `field`.                                                                | 
  #### Methods
   | Methods    | Description                                                                                                  |
| ---------         | -----------                                                                                                           |
| _istTextArea       |  **get isTextArea()**<br/>Check whether inputType is text area.<br/>*Type: boolean* | 
| ngOnInit       |  A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.<br/>*Return _config as StringField and return _hasError is false.*      | 
| ngAfterViewInit       |  A callback method that is invoked immediately after Angular has completed initialization of a component's view. It is invoked only once when the view is instantiated.<br/>Return *model* | 


### Fields
 `Class`
 A class that contain field types (texField, hiddenField, and radioField).

 #### Methods
 | Methods  | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| textField   |    **textField(c: Partial<StringField>): StringField**<br/>Return field types as StringField.<br/>*Type: Partial*                                                           |
| hiddenField     |  **hiddenField(c: Partial<HiddenField>): HiddenField**<br/>Return field types as HiddenField.<br/>*Type: Partial*                                                                    |
| boolField   |  **boolField(c: Partial<BooleanField>): BooleanField**<br/>Return field types as BooleanField.<br/>*Type: Partial*                                                                    |
### Field
 `Interface`   
 Abstraction for hold configuration.

#### Properties
| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| inputType    |    Type of input.<br/> *Type: String*<br/>                                                           |
| model     |  To get name of input field.<br/>*Type: String*                                                                   |
| required    |  Whether the Field is required.<br/>*Type: boolean*                                                                    |
### StringField
 `Interface`
Set field for StringField.
#### Properties
| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| placeholder    |    Text in the input field<br/>*Type: String*<br/>                                                           |
| label     |  Text.<br/>*Type: String*<br/>                                                                    |
| minlength   |  String Input has min length.<br/>*Type: number* <br/>                                                                   |
| maxlength   |  String Input has max length.<br/>*Type: number*<br/>                                                                    |
| pattern  |  String Input has pattern.<br/>*Type: number*<br/>                                                                    |
| row  |   Size of row on text area field.<br/> *Type: number*<br/>                                                                    |
| col   |  Size of col on text area field.<br/>*Type: number*<br/>                                                                    |
### BooleanField
 `Interface`
 Set field for BooleanField.

#### Properties
| Properties    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| checked   |     **checked: true** <br/> check the Booleanfield whether is true                                                         |
| choices   |     **choices: any** <br/>   choices of booleanfield                                                        |
| label  |     **label: string** <br/>                                                          |
### HiddenField
 `Interface`
 Set field for Hidden Field.

 ## List View
 A view of list for template Core UI.
 <br/>**How to use:**<br/>
  Add tag `moo-vlist` on template Core UI

  ### MooVList 
  `Component Class`
  A component that makes it easy to create list.
   
   #### Selector
   moo-vlist

  #### Properties
  
  | Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| listTemplate          |  **listTemplate: TemplateRef<NgForOfContext<any>>**<br/>                     |
| _dataSource$          | A variable to get the model of Contact  *Type Observable*                       |
| _modelSchema      |  |**_modelSchema:Dictionary<Field>**<br/>Schema                |

  #### Methods
  
  | Methods     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| setDataSource         |  **setDataSource(data: Observable<any>)**<br/>Get the model of Contact<br/>*Type: Observable*                       |
| setSchema         |   **setSchema(schema: any)**<br/>set modelSchema                        |
| ngOnInit        | **ngOnInit()**<br/>A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.                         |


### NgTemplate
  `Directive`
  The NgTemplate directive represents an list

 ## Table View
  A view of table form for template Core UI.
 <br/>**How to use:**<br/>
  Add tag `moo-vtable` on template Core UI

  ### MooVTable
  `Component Class`
   A component that makes it easy to create table.
   #### Selector
   moo-vtable

   #### Input
  
  | Input    | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| callbackTable         |        **callbackTable :Function**,<br/> Function for bind the input from template for tag moo-vtable to MoovtableComponent.                                         |
  #### Properties
  
  | Properties     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| columns          |  **columns: Field []**<br/> variable name for interface Field in array                                                                                    |
| _dataSource$          | **_dataSource$: Observable<any>**<br/> A variable to get the model of Contact  <br/>*Type observable*                       |
| modelSchema         |**modelSchema:Dictionary<Field>**<br/>Schema                       |


   #### Methods
 
  | Methods     | Description                                                                                                           |
| ---------         | -----------                                                                                                           |
| setDataSource()          |   **setDataSource(data: Observable<any>)**<br/>Get the model of Contact<br/>*Type: Observable*                                                                                   |
| setSchema()          |   **setSchema(schema: any)**<br/>  Set Schema                       |
| ngOnInit()          |    A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.             |
| delete()          |    **delete(id)** <br/> Delete data with callbackTable          |

 ## Chart View 
  <br/>**How to use:**<br/>
  Add tag `moo-vchart`
  ### MooVChart
   #### Selector
   moo-vchart

 ## Report View   
  <br/>**How to use:**<br/>
  Add tag `moo-vreport`
   ### MooVReport
   #### Selector
   moo-vreport


## Creators
- **Affandy Lamusu**

<https://github.com/afandylamusu>

- **Andrey**

<https://github.com/andreycls>


- **Ronald**

<https://github.com/ronald1402>


- **Oriani**

<https://github.com/orianisihaloho>

- **Felix**

<https://github.com/felixsiburian>




