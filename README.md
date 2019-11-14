# SpringBootReact

<h2>Description</h2>

<p>Basic skeleton with my own implementation of some features for <b>easy</b> monolithic startup app with spring boot (java) and react (typescript)</p>

<h2>Features</h2>

<p>
Mvc</br>
Security login with username and password with User and Role entities for hibernate</br>
Integration service with database logging for external systems</br>
Typescript interface generator for consistent DTO classes between backend and frontend</br>
Fetch wrapper for backend</br>
Session time and timeout</br>
3 profiles - dev, test and prod</br>
Example of scheduler</br>
Example of rest/mvc controllers</br>
Example of react components/br>
Resolved issues with SPA url redirection, dev/prod builds and others</br>
</p>

<h3>Java is using</h3>
<p>
Spring boot started - jetty</br>
Spring boot security</br>
Hiberante</br>
Http client</br>
Mysql</br>
JUnit5</br>
</p>

<h3>React is using</h3>
<p>
React</br>
React bootstrap</br>
React fontawesome</br>
React sidenav</br>
React history</br>
React router-dom</br>
</p>

<h3>Building</h3>
<p>
mvn clean install</br>
This should download nodejs and yarn, compile java classes, generate typescript interfaces from .classes (not .java) files, build react application for production mode and copy it into final .jar file</br>
<b>For your own good, please disable your antivirus software or use linux</b></br>
</br>
In folder /sql are the basic sql scripts for creation and filling the mysql database. If you do not want to waste time, I suggest you tu install xampp, start xampp-control-panel and just start the default mysql instance</br>
</p>

<h3>Profiles</h3>
<h4>dev</h4>
<p>
This profile is permitting all requests, so it does not have login/logout features.</br>
Class DevSecurityInformationService describes hardcoded user and role for simulation</br>
</p>
<h5>Usage</h5>
<p>
Start up spring boot application with profile 'dev'</br>
Open terminal in src/main/react folder and start up the application with 'npm start' command</br>
Ui will run at port 3000 by default and backend at port 80 by default</br>
BACKAND_URL is defined in Common.tsx file</br>
</p>

<h4>test</h4>
<p>
This profile is using the same database as dev, but it does have the login/logout feature</br>
This should be used for testing this kind of features</br>
</p>
<h5>Usage</h5>
<p>
mvn clean install</br>
Start up the final jar with command like this 'C:\dev\Java\jdk-11.0.4\bin\java -Drun.jvmArguments="-Dfile.encoding=UTF-8" -Dspring.profiles.active=test -jar target/app.jar'</br>
Everything should be working as dev, but it is now simulating the application in .jar file with all the prod features</br>
</p>

<h4>prod</h4>
<p>
This profile is using the same database as test, but it has its own production properties</br>
This should be used for production only</br>
</p>
<h5>Usage</h5>
<p>
mvn clean install</br>
Start up the final jar with command like this 'C:\dev\Java\jdk-11.0.4\bin\java -Drun.jvmArguments="-Dfile.encoding=UTF-8" -Dspring.profiles.active=test -jar target/app.jar'</br>
There is also a app.sh bash file which is wrote as init.d service. <b>Pid is not writing well, so stop will not work for now</b></br>
</p>
