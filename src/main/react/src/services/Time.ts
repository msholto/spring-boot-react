import BackendIntegration from "./BackendIntegration";

class Time {

    static formatFromDays(distance: number) {
        Time.roundUpToThousands(distance);

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }

        return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

    static formatFromMinutes(distance: number) {
        Time.roundUpToThousands(distance);

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            minutes = 0;
            seconds = 0;
        } else {
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }

        return minutes + "m " + seconds + "s ";
    }

    static roundUpToThousands(value: number): number {
        return (Math.round(value / 1000) * 1000);
    }
}

export default Time