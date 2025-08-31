# QuickInstaller

**A free, web-based bulk installer for Windows. Select your favorite apps and get a custom script to automate your setup. An open-source alternative to Ninite, powered by Chocolatey and client-side JavaScript.**

This project provides a simple, efficient, and privacy-focused way to set up a new Windows PC or install multiple applications at once without having to manually download and click through each installer.

### Features

* **Massive App Library:** Choose from hundreds of the most popular Windows applications across dozens of well-organized categories.
* **Custom Script Generation:** Get a personalized `.bat` script tailored to your specific selections.
* **Clean, Silent Installations:** The script uses Chocolatey to install software without any toolbars, bloatware, or manual "next" clicks.
* **User-Friendly Progress:** The generated script provides a clean, step-by-step progress view in the command prompt, hiding verbose logs for a better experience.
* **Client-Side & Private:** The entire application runs in your browser. Your app selections are never sent to a server, ensuring your privacy.
* **Live Search:** Instantly find the apps you need with a real-time search filter.
* **Fully Responsive:** Use it on any device, from a desktop to a mobile phone.

### How to Use

1.  **Visit the website.**
2.  **Select Apps:** Browse the categories or use the search bar to find and select all the applications you need.
3.  **Generate & Download:** Click the "Get Your QuickInstaller" button.
4.  **Run as Administrator:** After the download is complete, right-click the `QuickInstaller.bat` file and select **"Run as administrator"** to begin the automated installation process.

### Tech Stack

* **HTML5:** For the core structure and SEO-rich content.
* **Tailwind CSS:** For modern, utility-first styling.
* **Vanilla JavaScript (ES6+):** For all dynamic functionality, including UI rendering, search filtering, and client-side file generation using the Blob API.
* **Chocolatey:** The underlying package manager used by the generated script to install software on Windows.

### `js.org` Domain Justification

This project is a prime example of a useful, client-side JavaScript application. All core logic—including rendering the extensive app list, filtering results in real-time, and generating the final installation script—is handled entirely by vanilla JavaScript running in the user's browser. It demonstrates the power of the web platform to create valuable tools without requiring a server backend, making it a perfect fit for the `js.org` community.
