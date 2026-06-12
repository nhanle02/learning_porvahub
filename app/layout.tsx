import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <div className="root">
            <div className="flex flex-col md:flex-row min-h-screen bg-brand-black overflow-x-hidden font-sans">
                <Sidebar />
                <div className="flex-1 flex flex-col min-w-0">
                  <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-6 overflow-x-hidden">
                    {children}
                  </main>
                </div>
            </div>
         </div>
      </body>
    </html>
  );
}
