import { useRef, useState } from "react";
import ImageViewer from "../ImageViewer/ImageViewer";
import "./CharacterViewer.css";

export default function CharacterViewer({
  characters,
  gridClassName,
  cardClassName,
  imageClassName,
  titleTag = "h3",
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openerRef = useRef(null);
  const selectedCharacter =
    selectedIndex === null ? null : characters[selectedIndex];
  const selectedTitle = selectedCharacter?.nome ?? selectedCharacter?.title;

  return (
    <>
      <div className={gridClassName}>
        {characters.map((character, index) => {
          const title = character.nome ?? character.title;
          const image = character.image ?? character.imagem;
          const TitleTag = titleTag;

          return (
            <article
              className={cardClassName}
              key={title}
              role="button"
              tabIndex={0}
              aria-label={`Ampliar ${title}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setSelectedIndex(index);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openerRef.current = event.currentTarget;
                  setSelectedIndex(index);
                }
              }}
            >
              {image ? (
                <img
                  className={imageClassName}
                  src={image}
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                <span className={imageClassName} aria-hidden="true" />
              )}
              <TitleTag>{title}</TitleTag>
              {character.description && <p>{character.description}</p>}
            </article>
          );
        })}
      </div>

      <ImageViewer
        images={characters.map((character) => ({
          src: character.image ?? character.imagem,
          alt: character.nome ?? character.title,
        }))}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelect={setSelectedIndex}
        openerRef={openerRef}
        ariaLabel={selectedTitle}
        closeLabel="Fechar imagem"
        previousLabel="Imagem anterior"
        nextLabel="Próxima imagem"
      />
    </>
  );
}
