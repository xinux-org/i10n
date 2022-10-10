/** @jsx h */
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { h, html } from "https://deno.land/x/htm@0.0.10/mod.tsx";
import { UnoCSS } from "https://deno.land/x/htm@0.0.10/plugins.ts";

// enable UnoCSS
html.use(UnoCSS());

const handler = (req: Request) =>
  html({
    title: "Xinux Localization Mission!",
    body: (
      <div
        class="flex flex-col items-center justify-center w-full h-screen"
        style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
      >
        <div>
          <a href="https://l10n.gnome.org/teams/uz/">
            <h1 class="text-4xl font-bold">Gnome i10n</h1>
          </a>
          <p class="mt-2 text-lg text-center text-gray-600">
            Gnome Lokalizatsiyasi{" "}
            <a href="https://github.com/uzinfocom-org/i10n/tree/main/gnome">
              GitHub
            </a>
          </p>
        </div>

        <div class="pt-4">
          <a href="https://l10n.kde.org/team-infos.php?teamcode=uz">
            <h1 class="text-4xl font-bold">KDE i10n</h1>
          </a>
          <p class="mt-2 text-lg text-center text-gray-600">
            KDE Lokalizatsiyasi{" "}
            <a href="https://github.com/uzinfocom-org/i10n/tree/main/kde">
              GitHub
            </a>
          </p>
        </div>

        <footer class="fixed bottom-8 w-full h-6 flex items-center justify-center gap-2 text-gray-800">
          Powered by
          <a
            class="flex items-center gap-2 text-sm text-black no-underline font-semibold"
            href="https://oss.uzinfocom.uz"
          >
            <img
              alt="Deno"
              src="https://dash.deno.com/assets/logo.svg"
              class="w-5"
            />{" "}
            Uzinfocom Open Source Team
          </a>
        </footer>
      </div>
    ),
  });

serve(handler);
