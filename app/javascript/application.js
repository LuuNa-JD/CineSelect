// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"
import "@fortawesome/fontawesome-free";


document.addEventListener("turbo:load", () => {
  const favoritesControllers = document.querySelectorAll("[data-controller='favorite']");

  favoritesControllers.forEach((controller) => {
    controller.addEventListener("favorite:toggle", (event) => {
      const { favorited } = event.detail;

      updateFavoriteButtonUI(controller, favorited);
    });
  });
});

function updateFavoriteButtonUI(controller, favorited) {
  const checkboxId = `favorite-checkbox-${controller.idValue}`;
  const checkboxBackId = `favorite-checkbox-back-${controller.idValue}`;

  if (favorited) {
    document.getElementById(checkboxId).checked = true;
    document.getElementById(checkboxBackId).checked = true;
  } else {
    document.getElementById(checkboxId).checked = false;
    document.getElementById(checkboxBackId).checked = false;
  }
}
