export default function ViewportScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var d=document.documentElement,s=d.style;s.setProperty("--dvh",window.innerHeight*0.01+"px");s.setProperty("--svh",d.clientHeight*0.01+"px");s.setProperty("--lvh","1vh");})();`,
      }}
    />
  );
}
