import React from 'react'

function head() {
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
             className='h-6'
             alt='menu' 
             src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEX///8AAADy8vKioqL5+fkrKyt0dHTQ0NDT09M2Nja5ubnr6+upqamVlZVSUlLc3Nzi4uLExMRfX19FRUVsbGw+Pj5lZWWNjY2CgoJ6enoLCwsXFxdPKYE2AAACRklEQVR4nO3dC46jMAyAYRa6hVLenc6Uzv3vuaBqZh9STCyt5MT6vxPYSiAhGFMUAAAAAAAAAAAAuTqVSTspUrk2/XL5mazL0jfX2FTa24/k3dqodOo360DjvNXHucwX6yhjXWY/uRxnMy3WEWosk5hMZR2fTiXl0tytw9O5N0IyrXV0Wm04l+vZOjitc3i1GTObZds8G8OXjHVseuGLprYOTS+8DXCVTPNpHZvWZ3iaTYN1cFpDeA9QflgHp9WXwWRcLZrF9G4dnc67uNPMbGikgSmKU1ZXzcfBwcaU0fbsLD/O7Nk8rGOM9TjMZbs/d1lsN++dcFf+Q10lv3gOVcTZzMtpqtuuSlbX1pPmTHNLKGGqRAAAAAAAAID/J+m6RtXBWTnO/XpO1trPY9xB8zYo8/q0Pks+8lznqOEZe+tI4/ThSpNvdTblc8vhi4Am+bcZvw1StdnmulpHqLHK5cCddXw6nZTLmNEk2w3STSCzMgCxEKDM5k3zl0d48Zwy+Ajgb7fw6/Mm+ZX/X0/KGlMllDV6mmaubgCubs2uFk1f2xlXG01fjwCuHs58PTb7OtDwddRUuDoEfA2P9RGshLpGAAAAAAAAWLH+5FeiS8TRh9qOPqH31NzAU9sJTw1BXLVqyawQQGyi46q9UWYDI5c1ZnXF7ISWYK6atblqo+eqEtBVMq6agrpq1+qqka6rRdNX82lXbcGLMZvSud1yUHLmqZV+Ttkc5+Lr9xO+fgxSuPplyy7pqkbqGgEAAAAAAAAAQM5+AbaoXAOXviXAAAAAAElFTkSuQmCC'/>
        
        <img 
             className='h-6 mx-2'
             alt='YouTube Logo' 
             src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAb1BMVEX/AAD/////4uL/eHj//Pz/9/f/5eX/8PD/Cgr/nJz/yMj/29v/8/P/enr/zc3/Wlr/jo7/rq7/qan/0tL/LS3/f3//dHT/ZGT/wMD/tbX/oaH/ior/k5P/SUn/Ozv/Njb/bW3/GBj/ICD/QkL/UFCKxe69AAAEVElEQVR4nO2b23aqMBBAEwUiVwVEQFAR/f9vPAGLRcQ2h5k0ecj2oZe12rUtaTIzmSFUQ4hqgTmMlChGShQjJYqREsVIiWKkRDFSohgpUYyUKEZKFFEpyw4Yc/zIK8oyTpKjW9dVlWVhGK7f4N/Msqqq3WOSxHFZFl7qO4zZFlQqYH4aRfGxrvLTpd0QJK772zas3biIOk9bXMopjuFhe2qxRD7Qnu95WJXpjNlEyndvkl3e2TTl6geptEF7Tv/Hfr36IOU0aoweZGxOyturdCLkkr5LHdUqdSRTqUS1UUfyKlWq9nlQjqUc1TYDzreUlauWGdhaT6lCtcs3xVPqolrlm8sgFak2GRN9SYWqRcaEDyl2Ui0y5sR6qVTRKTzPJu2lNNk4B8peKlOt8UrWS2m0IXTseynVFlM6KW3OvQGHS6WqJaZ4XEqLSGqMy6Vq1RJTKi51UC0xpeFS2sRSA7lF7K1qiSl3Rpy/T4l/4eKQ1fJ0z6+kHOXtivjLCxkO9WU8+6tPAHtnl/8XEoKxiABi4b4oERyveDoPPP5azFelhGHHPh4BpFfP8o2P+wxLAog7RzWl4oznRI7EXf7D40IXc/GWVk12OFKUrtCWVsVfSFI8LULatTICeH9TKUoTlHg/JIDI5V2K2juESndOAJHLjBRfWvD47E4AW8ysFF9ad6DUjQAilw9S1Iph28OFAJbmJ6luaUG09gRQPf8sxU8ewFptCeAt/SRFabR4aV3lSdFgaUa5IYCI9hepbmkt+u1ypfgzXHLygCJ/ASlKvT8uXgpJrf74byUgtSiekbymkkW74EbilkCLhRvzVZ6Us3hPv8o6ZhggzN7LOZBpDAlBLwSQG32U8mCVnJuEIA/cSnAigAxkVgqymL7YkgZVyooRUuUDborloWR+GWYyipDI9CBmyDZaD0iFVeCwC7x+K5fEKFJYZYSeGKVoxho0oY4Cobxoucidch64EGsV6DerEbRk7TdoLk9SSHF/RR0Zl+KtD7kGcZZFu7+xX0EujCQ1WdwcEkCrSejcA6JPQ9dAbhHaKHZ4o7uuhQdlyOy4lAYNnq8cuRTgnJGDp2tbiZYNOFR2N/x/0vZSWvUJErLupQCxpwySXkqrNs++0ZNL6dXDcXYezada9QU19CGlUT/zoyW9b2hGb3cAYA1SGv3/HekgZWvTPXxmTynqq5YZiOi3lC7xy46OpfToYczoqxQFlISwaKypFC1VRwvuU2U0ICall02Yi0fnpCj1lKVbp2Ts8Tp0aKU1ZiOUKIeC0c9SvZhf1uv89Ady7e3eZO5EaF6qx2ZOGnmlW4fbc4t7NF73pzyrkzKKfIfND9yKjfxadj/vW5RlP+27q75mfQ+Hpsnzbced03+S53lzODxGf7vB39pNkrgb+10xFnyap10i9dnWsmxOEASMwz90X4kPHMuRkoOREsVIiWKkRDFSohgpUYyUKEZKFCMlipESxUiJ8g8k9ki4QZMDSQAAAABJRU5ErkJggg==' />
      </div>
      <div className='col-span-10 text-center'>
        <input 
       className='w-1/2 border border-gray-600 p-2 rounded-l-full'
        type="text"/>
        <button className='border border-gray-600 px-4 p-2 rounded-r-full bg-gray-200'>Search</button>
      </div>
      <div className='col-span-1'>
        <img 
             className='h-8'
             alt='user-icon' 
             src='data:image/png;base64,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' />
      </div>
    </div>
  )
}

export default head;