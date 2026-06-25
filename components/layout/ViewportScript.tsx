export default function ViewportScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var d=document.documentElement,s=d.style,h=window.innerHeight;s.setProperty("--dvh",h*0.01+"px");s.setProperty("--svh",d.clientHeight*0.01+"px");s.setProperty("--lvh","1vh");s.setProperty("--full-height",h+"px");})();`,
      }}
    />
  );
}
