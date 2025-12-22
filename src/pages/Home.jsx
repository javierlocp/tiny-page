import { BlogPreview, ExternalLink, ExplorationsGrid, BookCall } from '@/components';
const Home = () => {
  return (
    <>
      <div className="intro mb-4 flex flex-col gap-4">
        <h1>A lightweight React template with simple Markdown blog integration.</h1>
        <p>
          Built by Javier Lo as a learning project for React and related tools. You're free to clone it on <ExternalLink href="https://github.com/javierlocp/my-personal-site">Github</ExternalLink> and
          use it however you like.
        </p>
      </div>
      <BookCall />
      <ExplorationsGrid />
      <BlogPreview />
    </>
  );
};

export default Home;
