import re

raw = open("birbank-footer-raw-css.txt", encoding="utf-8").read()

mapping = {
    "v7UtyeBd8lDoVCm0rndn": "footer",
    "xY79jp9QaPTo5BoxuKlt": "footer__top",
    "IBriGbkDjNycfPsBXAH_": "footer__bottom",
    "NKUFMnweK0QW8imSlE4d": "footer__bottom__desktopCopyright",
    "Mt85tG_7zX7p7QzgcAl8": "footer__bottom__mobileInfo",
    "ekA1L8ycbMH8ryi3M2as": "footer__logo",
    "WMRGZBoMReBkmqIY7JY3": "footer__container",
    "kO3l87_j8K7nfnPSgfpx": "footer__container__info",
    "GM8O1FIKhiHAp1Bjkgeq": "footer__links",
    "RkkGjE8Ha_CqgaYNoMMV": "footer__links__socials",
    "QxKzm2l1WUi0_jX4j4lq": "footer__links__socials__item",
    "XEefInT8NqQyChk7ynVF": "footer__links__socials__call",
    "wmRAgwhXKYblT3sn7dNY": "footer__links__socials__call__text",
    "k2hpSl74jPgrPWJW_CwJ": "footer__links__privacy",
    "j3gm2hFOsW5vOru3ZXfE": "footer__links__privacy__mobile",
    "eZFgXvEIFrwhWaiFUgxo": "footer__links__privacy__desktop",
    "m8TLwKHpfQOxH6rxd5nj": "footer__links__categories",
    "oql9_zbrpkMqGBCJRrMq": "footer__links__categories__item",
    "njfDchq0JujvzPbhlS23": "footer__links__categories__item--active",
    "rg8YjNPy0yD9Rj31ZUdh": "footer__links__info",
    "qw1UJomj9H4mkrKUeLoQ": "footer__apps",
    "aBX0erJi1OK5rCpvManR": "footer__apps__qr",
    "SHwVgTySRUNVZI9n6664": "footer__apps__item",
    "xODzfLFEqxYhMaPZ8N8k": "footer__apps__item__info",
    "nbYPmB45RrL96hfFlQ6q": "footer__apps__item__info__name",
    "cjcMYprELoSxfYc0TUCQ": "footer__apps__item__info__description",
}

css = raw.split('`,""]')[0]  # trim webpack tail
for hashed, semantic in mapping.items():
    css = css.replace(f".{hashed}", f".birbank-footer .{semantic}")

open("../app/birbank-footer.css", "w", encoding="utf-8").write(
    ":root {\n"
    "  --birbank-primary-text: #25282b;\n"
    "  --birbank-secondary-text: #61656b;\n"
    "  --birbank-white: #fff;\n"
    "  --birbank-primary-mid-light: #ec3342;\n"
    "  --birbank-bottom-line: #f9f9fa;\n"
    "}\n\n"
    + css.replace("var(--primary-text)", "var(--birbank-primary-text)")
    .replace("var(--secondary-text)", "var(--birbank-secondary-text)")
    .replace("var(--white)", "var(--birbank-white)")
    .replace("var(--primary-mid-light)", "var(--birbank-primary-mid-light)")
    .replace("var(--bottom-line)", "var(--birbank-bottom-line)")
    + "\n\n.birbank-footer .footer__logo img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n"
    + ".birbank-footer .footer__logo .footer__logo-text {\n  color: var(--birbank-white);\n  font-size: 1.75rem;\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  text-decoration: none;\n}\n\n"
    + ".birbank-footer .footer__links__socials__item svg {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n}\n"
)

print("wrote birbank-footer.css")
