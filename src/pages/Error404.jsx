import MainContainer from "../layouts/MainContainer";

const Error404 = () => {
  return (
    <MainContainer className="error404">
      <section className="error404__content">
        <h1 className="error404__title">404</h1>
        <p className="error404__description">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a href="/" className="error404__link">
          Retourner sur la page d'accueil
        </a>
      </section>
    </MainContainer>
  );
};
export default Error404;
