#! /bin/sh
# /etc/init.d/app
#

# Some things that run always
touch /var/lock/app

# Carry out specific functions when asked to by the system
case "$1" in
  start)
    echo "Starting script app "
	start-stop-daemon --start --pidfile /home/debian/app/pid --background --exec /home/debian/app/java/jdk-11.0.4/bin/java -- -Drun.jvmArguments="-Dfile.encoding=UTF-8" -Dspring.profiles.active=prod -jar /home/debian/app/app.jar
    ;;
  stop)
    echo "Stopping script app"
    start-stop-daemon --stop --pidfile /home/debian/app/pid
    ;;
  *)
    echo "Usage: /etc/init.d/app {start|stop}"
    exit 1
    ;;
esac

exit 0

