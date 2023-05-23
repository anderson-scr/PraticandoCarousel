export const buildCard = (img, name, bio, index) => {

  const htmlCard = `
    <div class="containerCard" id="card-${index}">
      <div class="upperSide">
        <div class="upperSideBorderEffect">
          <div class="containerImg">
            <img class="imgUsuarioCarousel loadingImg" src="${img}" alt="Picture of ${name}">
          </div>
        </div>
      </div>

      <div class="bottomSide">
        <div class="bottomSideBorderEffect">
          <h4 class="namePerson">
            ${name}
          </h4>
          <p class="bioPerson">
            ${bio}
          </p>
          <button class="btnViewMore">View more</button>
        </div>
      </div>
    </div>
  `
  return htmlCard
}