// app/layout.js
// import '../styles/globals.css';
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

export const metadata = {
  title: 'PLUG - Fashion That Completes You',
  description: 'Curated fashion essentials for all ages and styles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// This layout wraps the entire application, providing a consistent structure with a navbar and footer.
// The metadata object defines the title and description for the application, which can be used for SEO purposes.
// The 'globals.css' file is imported to apply global styles across the application.
// The Navbar and Footer components are included to maintain a consistent layout across all pages.
// The 'children' prop represents the content of each page, allowing for dynamic rendering of different components based on the route.
// The 'lang' attribute in the html tag is set to 'en' for English, which is important for accessibility and SEO.
// The 'main' tag is used to wrap the main content of the page, which is a semantic HTML5 element that helps with accessibility and SEO.
// The layout is structured to ensure that the navbar appears at the top, followed by the main content, and the footer at the bottom.
// This layout is essential for maintaining a consistent user experience across the application, ensuring that all pages have the same header and footer while allowing for dynamic content in between.
// The layout is designed to be responsive and user-friendly, providing a seamless navigation experience.         