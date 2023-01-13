# Single SPA (Welcome to Micro Frontend World)

<img src="https://single-spa.js.org/img/single-spa-mark-magenta.svg" alt="" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="100" height="50" />**SIngle-SPA**

## Documentation -📃

- The starting point of our application is **index.ejs** (A javascript file which can be given as input in the webpack file.)
- This template will generate an **index.html** which is our staring point
- It already comes with supporting featues for all broswers

### Import-map 🧠

- This is the core concepts that is used it import-map (Import the npm package but the (es6 module imports)
- eg `import shradha from '@linkdin/shradha20'`

```sh
<script type="systemjs-importmap">
    {
      "imports": {
        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
      }
    }
  </script>
  ```

- This above statement provide us to import the singl-spa(_Short hand notation_) instance in our micro-framework application,
- It is used forimport the system as well as native js and dynamic imports of es modules accross the applications
- Which is defined the meta tag inside the **index.ejs** module

> search: `<meta name="importmap-type" content="systemjs-importmap" />` is required allows the system js and es dynamic module imports

**These are few important core concepts that been used by the Single-spa to render Micro frontend architecutre**

### Root-config and basic routing 🧑‍🌾

- Here the Single-spa constructs different Routes for our different micro frontend framwork to load.
- we can check that in the **layout.htm** file where `<single-spa-router` with custom `router` outlet is being defined for the routing of our different application.
- For that we need to provide the single-spa the framework build files, which it would used for its routing when ask it to load the required framework and libraries

```sh
 <script type="systemjs-importmap">
    {
      "imports": {
        "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
        "@Microfrontend/root-config": "//localhost:9000/Microfrontend-root-config.js"
      }
    }
  </script>
```

After all of these setup we are started our root config application.

## Creating and setting the React

We can configure it in two ways, **either manually or ask the CLI to generate the spa-configured react application.**.

- `create-single-spa`
- then select on the  👉 `single-spa application / parcel`
- then select on the  framework you want Single spa to install and integrate for you automatically 👇
- `React | Vue | Angular | Svelte | Others`

#### Project set up

After the installation follow these steps

- Check your package.json and copy your application name `"name": "@react-app/react-app",`
- Now go to the **Index.ejs** file and add this key with the local server (Build or watch) mode inside the _Local_ file conditions

```
<% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
        "@Microfrontend/root-config": "//localhost:9000/Microfrontend-root-config.js",
        "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"
        "@react-app/react-app": "http://localhost:8080/react-app-react-app.js"
      }
    }
  </script>
  <% } %>
```

> Note for Multiple **React** application we need to add the react and react dome inside the sharable script file not in the local file.

```sh
<script type="systemjs-importmap">
    {
      "imports": {
        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
      }
    }
  </script>
  ```

Next we need to change the application route and point it to the React app

```html
 <main>
    <route default>
    <!-- Here we need to declare the route -->
      <application name="@react-app/react-app"></application>
    </route>
  </main>
```

Then **inside react app folder** run

` npm start `

Now navigate your root config and run

`npm start`

### Integrating with Angular

> Note the same step for installation but now**instead of react choose angular** and install the frame work

After this we need to do some changes in **Angular Routing Modules**,

- First we need to add the  single-spa into our angular application

> **Note if your angular version is 14 or 15 there might be some changes we need to do, for that you can check the official documentation.**

```ng new my-app --routing --prefix my-app```

- Then go to the **app.routing.module.ts** then add the providers where we can define the base path.

```sh
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  exports: [RouterModule]
})
```

- Once we did the angular set up and modification, we need to do few more changes in our **index.ejx** and router file.
- uncomment the zone.js file

```
<script src="https://cdn.jsdelivr.net/npm/zone.js@0.11.3/dist/zone.min.js"></script>
```

- Then add the localhost file into the system-import-local file

```sh
<script type="systemjs-importmap">
    {
      "imports": {
        "@Microfrontend/root-config": "//localhost:9000/Microfrontend-root-config.js",
        "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
        "@react-app/react-app": "http://localhost:8080/react-app-react-app.js",
        "angular-app": "http://localhost:4200/main.js"
      }
    }
  </script>
```

- Then add it in to your routes.

```
 <main>
    <route path="angular">
      <application name="angular-app"></application>
    </route>
    <route default>
      <application name="@react-app/react-app"></application>
    </route>
  </main>
```

## Single-spa Layout support

For defining the root layout of our application we need to configure the single-spa  **nav** layout features.

```
  <nav>
    <application name="@org/navbar"></application>
  </nav>

```

That mean this defined application is always present in our View irrespective which application module we are loading.

There are somany configuration is available in the official doucmentation.  Like

- Json Layout
- Templates
- Fragment
- Redirects

## Production Deployment

For Production Deployment we need to first uncomment the**import.json** file. then need to create it for this *import.json*file in our ***DIST*** folder.

copy the declaration inside **systemjs.import** and paste it in the import.json.

**Bingo** 🥳🥳 , Now run the application and check.
