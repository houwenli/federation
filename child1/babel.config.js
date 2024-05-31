module.exports = {
  presets: [
    [  
      "@babel/preset-env",  
      {  
        "targets": {  
          "esmodules": true,  
          "browsers": ["> 0.25%", "not dead"] // 根据需要调整目标浏览器  
        },  
        "useBuiltIns": "usage",  
        "corejs": 3  
      }  
    ]  
  ]
}
