Two type of data binding is possible in angular

1- one way data binding 
  a)component to view 
  b)view to component

  Below are the component to view data binding
    {{ variable }}          `string interpolation`
    [property] = variable || bind-property = variable  `property binding`

  view to component are using `event binding`
    (variable)="expression"

  IMP to bind some special attributes like accessibility and that time property binding will through an error for this we will use like [attr.attr-hidden]=value

2- Two way data binding 
  It is the combination of property binding and event binding.
  both direction. To achieve this we will use ([ngModel])='variable name'
  -> to use ngModel we wanted to import in NgModule
  -> `ngModule` is a stand alone component so we needed to import corresponding module like for handle form `FormsModule`