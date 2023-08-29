<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
    <title>Stencil Component Starter</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Libre+Barcode+39+Extended+Text&family=Montserrat:wght@100;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="/build/honeycomb.css" />

    <script type="module" src="/build/honeycomb.esm.js"></script>
    <script nomodule src="/build/honeycomb.js"></script>

  </head>
  <body>
    <div class="container stack" style="position: relative; display: flex; justify-content: space-between">
      <hc-asidenav avatar="http://fakeimg.pl/50x50?text=A&font=bebas">
        <nav slot="aside-links" class="aside-menu">
          <a class="nav-link" href="http://linkedin.com">LI</a>
          <a class="nav-link" href="http://dribbble.com">DR</a>
        </nav>
      </hc-asidenav>

      <div class="o-constrain" style="flex: 2; padding-right: 5%">
        <div style="display: grid; grid-template-columns: auto">
          <hc-stack stack="lg" style="justify-self: flex-end">
            <hc-header></hc-header>
          </hc-stack>
        </div>
      </div>
    </div>

    <hc-panel size="lg" tokens="_flx-column _md:flx-row" as="flex-lg">
      <div class="left flex-item">
        <hc-asidenav avatar="http://fakeimg.pl/50x50?text=A&font=bebas">
          <nav slot="aside-links" class="aside-menu">
            <a class="nav-link" href="http://linkedin.com">LI</a>
            <a class="nav-link" href="http://dribbble.com">DR</a>
          </nav>
        </hc-asidenav>
      </div>
      <div class="right flex-item">
        <hc-header link-class="resume">H</hc-header>
      </div>
    </hc-panel>

    <!-- <hc-panel size="lg" tokens="_flx-column _md:flx-row" as="flex-lg">
      <div style="background-color: red; color: #fff; padding: 1em; flex: 1">Left</div>
      <div style="background-color: blue; color: #fff; padding: 1em; flex: 1">Right</div>
    </hc-panel> -->

    <!-- <script>
      // TEST SUITE:
      const panels = document.querySelectorAll('hc-panel');
      panels.forEach(panel => {
        console.log(panel);
      });
    </script> -->

  </body>
</html>
