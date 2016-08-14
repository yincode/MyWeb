$(document).ready(function() {
    var container = $("#container");
    var zheng = $(".zheng");
    var bei = $(".bei");
    var zheng_box = zheng.find(".box");
    var  bei_box= bei.find(".box");
    var btn = $(".btn");
    var close = $(".close");
    var aImg = $(".img img");
    var logo = $(".logo");

    $.Velocity.RegisterUI('slideUpIn', {
        defaultDuration: 500,
        calls: [
            [{ opacity: [1, 0], translateY: [0, 100] }]
        ]
    });

    $.Velocity.RegisterUI('slideDownOut', {
        defaultDuration: 300,
        calls: [
            [{ opacity: [0, 1], translateY: [100, 0] }]
        ]
    });

    $.Velocity.RegisterUI('scaleIn', {
        defaultDuration: 500,
        calls: [
            [{ opacity: [1, 0], scale: [1, 0.3] }]
        ]
    });

     $.Velocity.RegisterUI('scaleOut', {
        defaultDuration: 500,
        calls: [
            [{ opacity: [0, 1], scale: [0.3, 1] }]
        ]
    });

    var seq = [{
        elements: container,
        properties: 'slideUpIn',
        options: {
            delay: 300
        }
    }, {
        elements: zheng_box,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false
        }
    }, {
        elements: logo,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false,
            delay: 100
        }
    }];

    seqClick = [{
        elements: container,
        properties: 'slideDownOut',
    }, {
        elements: zheng,
        properties: 'slideDownOut',
        options: {
            sequenceQueue: false
        }
    },{
        elements: container,
        properties: 'slideUpIn',
    },{
        elements: bei,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false
        }
    },{
        elements: bei_box,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false
        }
    },{
        elements: close,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false
        }
    },{
        elements: aImg,
        properties: 'scaleIn',
        options: {
            sequenceQueue: false
        }
    },
    ];

    seqClose = [{
        elements: aImg,
        properties: 'scaleOut',
        options: {
            sequenceQueue: false
        }
    },{
        elements: close,
        properties: 'slideDownOut',
        options: {
            sequenceQueue: false
        }
    },{
        elements: aImg,
        properties: 'scaleOut',
        options: {
            sequenceQueue: false
        }
    },{
        elements: container,
        properties: 'slideDownOut',
    }, {
        elements: bei,
        properties: 'slideDownOut',
        options: {
            sequenceQueue: false
        }
    },{
        elements: container,
        properties: 'slideUpIn',
    },{
        elements: zheng,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false
        }
    },{
        elements: zheng_box,
        properties: 'slideUpIn',
        options: {
            sequenceQueue: false
        }
    }
    ];

    $.Velocity.RunSequence(seq);

    btn.on('click',function(){
    	$.Velocity.RunSequence(seqClick);
    });

    close.on("click",function(){
    	$.Velocity.RunSequence(seqClose);
    })
});
