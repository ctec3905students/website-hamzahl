# CTEC3905 Assignment
Initial code for the website was taken from the boilerplate code that was already generated.

# Notes
* Slight issue with the branching (the branch was displayed as merging in correctly) meant I had to revert to an early working state using `git reset --hard 0c9a77d`
* An issue arose on GitHub Pages and local instance following `commit 4361730 (Merge branch 'feature/navigation')`. It would appear as the previous stylesheet was being cached. This can be resolved by the following :
  1. Open up Dev Tools
  2. Navigation to Application tab
  3. Click Clear Storage on the left hand side
  4. Scroll down and click Clear site data
  5. Refresh browser
![Stylesheet issue fix](https://i.imgur.com/TeXNm9Y.png "Steps to fix stylesheet issue")

# References
* Body Grid layout for overall webpage was adapted from my Lab 6 work
* Projects layout was adapted from [here](https://getflywheel.com/layout/card-layout-css-grid-layout-how-to/)
* Navbar was inspired through watching this [video](https://www.youtube.com/watch?v=gXkqy0b4M5g). The burger bar animation was derived entirely from "Dev Ed" however some prior knowledge was also used to for the JS toggle.
