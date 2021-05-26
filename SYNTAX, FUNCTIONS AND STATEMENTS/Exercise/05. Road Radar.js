function roadRadar(speed, area) {

    let speeds = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    if (speeds[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${speeds[area]} zone`);
    } else {
        let overLimit = speed - speeds[area]
        if (overLimit <= 20) {
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${speeds[area]} - speeding`);
        } else if (overLimit > 20 && overLimit <= 40) {
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${speeds[area]} - excessive speeding`);
        } else{
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${speeds[area]} - reckless driving`);
        }
    }
}
roadRadar(120, 'interstate')