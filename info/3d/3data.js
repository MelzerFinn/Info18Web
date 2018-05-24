
AFRAME.registerComponent('initsse', {
    init: function () {
        var source = new EventSource("../data.php");
        var lastx = 0;
        var lasty = 0;
        var counter = 0;
        source.onmessage = function (event) {
            counter++;
            if (counter > 399) counter = 0;
            coords = (/(\d\.\d|\d)\-(\d\.\d|\d)/im).exec(event.data);
            x = (/(\d\.\d|\d)/im).exec(coords)[0];
            y = (/\-(\d\.\d|\d)/im).exec(coords)[0];
            y = y.substring(1, y.length);
            newx = lastx;
            newy = lasty;
            newx += +x - 0.1;
            newy += +y - 0.1;
            if (counter / 100.0 > 3) {
                newx += 0.1;
                newy += 0.1;
            } else if (counter / 100.0 > 2) {
                newx += 0.1;
                newy -= 0.1;
            } else if (counter / 100.0 > 1) {
                newx -= 0.1;
                newy -= 0.1;
            } else {
                newx -= 0.1;
                newy += 0.1;
            }
            distx = lastx - newx;
            disty = lasty - newy;
            dist = Math.sqrt((distx * distx) + (disty * disty));
            rotation = Math.atan2(disty,distx)*180/Math.PI;
            var el = document.createElement("a-entity");
            el.setAttribute('geometry', 'primitive', 'box');
            el.setAttribute('material', 'color', 'red');
            el.setAttribute('position', { x: newx, y: 0, z: newy });
            el.setAttribute('geometry', 'width', '0.01');
            el.setAttribute('geometry', 'depth', '0.01');
            el.setAttribute('geometry', 'height', '2');
            document.querySelector("a-scene").appendChild(el);
            var elem = document.createElement("a-entitiy");
            elem.setAttribute('geometry', 'primitive', 'box');
            elem.setAttribute('material', 'color', 'green');
            elem.setAttribute('position', { x: (newx + lastx) / 2, y: 0, z: (newy + lasty) / 2 });
            elem.setAttribute('geometry', 'width', ''+dist);
            elem.setAttribute('geometry', 'depth', '0.01');
            elem.setAttribute('geometry', 'height', '2');
            elem.setAttribute('rotation', '0 '+rotation+' 0');
            document.querySelector("a-scene").appendChild(elem);
            lastx = newx;
            lasty = newy;
        };
    }
});

