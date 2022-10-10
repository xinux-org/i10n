/** @jsx h */
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { h, html } from "https://deno.land/x/htm@0.0.10/mod.tsx";
import { UnoCSS } from "https://deno.land/x/htm@0.0.10/plugins.ts";

// enable UnoCSS
html.use(UnoCSS())

const handler = (req: Request) => html({
  title: "Hello World!",
  body: (
    <div
      class="flex flex-col items-center justify-center w-full h-screen"
      style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
    >
      <div> 
        <h1 class="text-4xl font-bold">Hello World!</h1>
        <p class="mt-2 text-lg text-center text-gray-600">Develop Locally, Deploy Globally</p>
      </div>
      <div class="p-4"> 
        <h1 class="text-4xl font-bold">Hello World!</h1>
        <p class="mt-2 text-lg text-center text-gray-600">Develop Locally, Deploy Globally</p>
      </div>
      <footer class="fixed bottom-8 w-full h-6 flex items-center justify-center gap-2 text-gray-800">
        Powered by
        <a
          class="flex items-center gap-2 text-sm text-black no-underline font-semibold"
          href="https://deno.com/deploy"
        >
          <img alt="Deno" src="https://dash.deno.com/assets/logo.svg" class="w-5" /> Deno Deploy
        </a>
      </footer>
    </div>
  ),
});

serve(handler);
