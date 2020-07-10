import { Engine } from "./node_modules/kanafas/core/index.js";
import { Fill, Stroke } from "./node_modules/kanafas/properties/index.js";
import { Color } from "./node_modules/kanafas/styles/index.js";
import { Angle } from "./node_modules/kanafas/units/index.js";
import {
    RectangleShape,
    EllipseShape,
    RoundedRectangleShape,
    PieShape,
    PolygonShape,
} from "./node_modules/kanafas/renderables/index.js";


// Init
const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
const engine = new Engine(canvas, 700, 500, window.devicePixelRatio);

canvas.style.width = `${engine.width}px`;
canvas.style.height = `${engine.height}px`;


// Properties
const size = 160;
const margin = 120;
const stroke = new Stroke(Color.black(), 2)


// Objects
const rectangle = new RectangleShape(size, size);
rectangle.transform.origin.x = size / 2;
rectangle.transform.origin.y = size / 2;
rectangle.transform.position.x = margin;
rectangle.transform.position.y = margin;
rectangle.fill = new Fill(Color.green(.6));
rectangle.stroke = stroke;

const ellipse = new EllipseShape(size, size);
ellipse.transform.origin.x = size / 2;
ellipse.transform.origin.y = size / 2;
ellipse.transform.position.x = engine.width - margin;
ellipse.transform.position.y = margin;
ellipse.fill = new Fill(Color.red(.6));
ellipse.stroke = stroke;

const round = new RoundedRectangleShape(size, size, 20);
round.transform.origin.x = size / 2;
round.transform.origin.y = size / 2;
round.transform.position.x = engine.width - margin;
round.transform.position.y = engine.height - margin;
round.fill = new Fill(Color.blue(.6));
round.stroke = stroke;

const pie = new PieShape(size, size, new Angle(60), new Angle(390), .5);
pie.transform.origin.x = size / 2;
pie.transform.origin.y = size / 2;
pie.transform.position.x = margin;
pie.transform.position.y = engine.height - margin;
pie.fill = new Fill(Color.yellow(.6));
pie.stroke = stroke;

const polygon = new PolygonShape([
    { x: 0, y: 0 },
    { x: size / 2, y: size * (1 / 6) },
    { x: size, y: 0 },
    { x: size * (5 / 6), y: size / 2 },
    { x: size, y: size },
    { x: size / 2, y: size * (5 / 6) },
    { x: 0, y: size },
    { x: size * (1 / 6), y: size / 2 },
], true, .1, .9, 1)
polygon.transform.origin.x = size / 2;
polygon.transform.origin.y = size / 2;
polygon.transform.position.x = engine.width / 2;
polygon.transform.position.y = engine.height / 2;
polygon.fill = new Fill(Color.grey(.6));
polygon.stroke = stroke;


// Render
function update() {
    polygon.trimOffset += .001;
}

function render() {
    rectangle.render(engine);
    ellipse.render(engine);
    round.render(engine);
    pie.render(engine);
    polygon.render(engine);
}

engine.loop.addUpdateCallback(() => {
    engine.clear();

    update();
    render();
});

engine.loop.run();