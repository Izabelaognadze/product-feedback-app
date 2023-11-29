import { Route } from '@angular/router';
import { ButtonComponent } from './design-system/button/button.component'

export const appRoutes: Route[] = [
    {
        path:'iza', component: ButtonComponent
    }
];

// const appRoutes: Route[] = [
//     {
//         path:'/', component: ButtonComponent
//     }
// ];

// export default appRoutes;
// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule {}