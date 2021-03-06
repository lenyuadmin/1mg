$(document).ready(function() {
       $('#chartA').kendoChart({
           seriesDefaults: {
                type: 'line'
            },
            legend:{            
                position : "bottom"
            },
            theme : 'bootstrap',
            tooltip:{
                visible:true,
                template:"#= series.name # #= value #"
            },
            categoryAxis: {
                categories: ['07-20','07-21','07-22','07-23','07-24','07-25','07-26'],
                majorGridLines: {
                    visible: false
                }
            },
            series: [{
                name: "测试数据1",
                data: [0, 2, 4, 5, 0, 1, 0]
            }, {
                name: "测试数据2",
                data: [0, 1, 0, 0, 2, 0, 0]
            }, {
                name: "测试数据3",
                data: [4, 0, 2, 1, 5, 0, 1]
            }]
        });

        $('#chartB').kendoChart({
            legend:{            
                position : "bottom"
            },
            theme : 'bootstrap',
            seriesDefaults:{
                type:'area',
                area: {
                    line: {
                        style: "smooth"
                    }
                }
            },
            categoryAxis:{
                categories : ['周一','周二','周三','周四','周五','周六','周日'],
                majorGridLines: {
                    visible: false
                }
            },
            series: [{
                name:'项目一',
                data:[10, 12, 21, 54, 260, 830, 710]
            },
            {
                name:'项目二',
                data:[30, 182, 434, 791, 390, 30, 10]
            },
            {
                name:'项目三',
                data:[1320, 1132, 601, 234, 120, 90, 20]
            }]
        });

        $('#chartC').kendoChart({
            legend:{            
                position : "bottom"
            },
            theme : 'bootstrap',
            seriesDefaults: {
                labels: {
                    template: "#= category # - #= kendo.format('{0:P}', percentage)#",
                    position: "outsideEnd",
                    visible: true,
                    background: "transparent"
                }
            },
            series: [{
                name: '访问来源', 
                type: 'pie',
                data: [{
                    category:'直接访问',
                    value:335
                }, 
                {
                    value: 310,
                    category: '测试数据1'
                },
                {
                    value: 234,
                    category: '测试数据2'
                },
                {
                    value: 135,
                    category: '测试数据3'
                },
                {
                    value: 1548,
                    category: '测试数据4'
                }]
            }]
        });

        $('#chartD').kendoChart({
            seriesDefaults: { 
                type: 'column' 
            },
            legend:{            
                position : "bottom"
            },
            theme : 'bootstrap',
            tooltip: { 
                visible: true,
            },
            categoryAxis: { 
                categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                majorGridLines: {
                    visible: false
                }
            }, 
            series: [{ 
                name: '测试数据1', 
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }, { 
                name: '测试数据2', 
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
            }, { 
                name: '测试数据4',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
            }, {
                name: '测试数据5',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
            }] 
        });
    });
    
    //重新绘制
    $(window).on('resize',function(){
        var chartA = $("#chartA").data("kendoChart");
        var chartB = $("#chartB").data("kendoChart");
        var chartC = $("#chartC").data("kendoChart");
        var chartD = $("#chartD").data("kendoChart");
        
        chartA.redraw();
        chartB.redraw();
        chartC.redraw();
        chartD.redraw();
    });