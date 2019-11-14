# SpringBootReact

<h2>Description</h2>

* <p>Basic skeleton with my own implementation of some features for <b>easy</b> monolithic startup app with spring boot (java) and react (typescript)</p>

<h2>Features</h2>

<p>
&nbsp; &nbsp; &nbsp; &nbsp; Mvc</br>
&nbsp; &nbsp; &nbsp; &nbsp; Security login with username and password with User and Role entities for hibernate</br>
&nbsp; &nbsp; &nbsp; &nbsp; Integration service with database logging for external systems</br>
&nbsp; &nbsp; &nbsp; &nbsp; Typescript interface generator for consistent DTO classes between backend and frontend</br>
&nbsp; &nbsp; &nbsp; &nbsp; Fetch wrapper for backend</br>
&nbsp; &nbsp; &nbsp; &nbsp; Session time and timeout</br>
&nbsp; &nbsp; &nbsp; &nbsp; 3 profiles - dev, test and prod</br>
&nbsp; &nbsp; &nbsp; &nbsp; Example of scheduler</br>
&nbsp; &nbsp; &nbsp; &nbsp; Example of rest/mvc controllers</br>
&nbsp; &nbsp; &nbsp; &nbsp; Example of react components</br>
&nbsp; &nbsp; &nbsp; &nbsp; Resolved issues with SPA url redirection, dev/prod builds and others</br>
</p>

<h3>Java is using</h3>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; Spring boot started - jetty</br>
&nbsp; &nbsp; &nbsp; &nbsp; Spring boot security</br>
&nbsp; &nbsp; &nbsp; &nbsp; Hiberante</br>
&nbsp; &nbsp; &nbsp; &nbsp; Http client</br>
&nbsp; &nbsp; &nbsp; &nbsp; Mysql</br>
&nbsp; &nbsp; &nbsp; &nbsp; JUnit5</br>
</p>

<h3>React is using</h3>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; React</br>
&nbsp; &nbsp; &nbsp; &nbsp; React bootstrap</br>
&nbsp; &nbsp; &nbsp; &nbsp; React fontawesome</br>
&nbsp; &nbsp; &nbsp; &nbsp; React sidenav</br>
&nbsp; &nbsp; &nbsp; &nbsp; React history</br>
&nbsp; &nbsp; &nbsp; &nbsp; React router-dom</br>
</p>

<h3>Building</h3>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; mvn clean install</br>
&nbsp; &nbsp; &nbsp; &nbsp; This should download nodejs and yarn, compile java classes, generate typescript interfaces from .classes (not .java) files, build react application for production mode and copy it into final .jar file</br>
&nbsp; &nbsp; &nbsp; &nbsp; <b>For your own good, please disable your antivirus software or use linux</b></br>
&nbsp; &nbsp; &nbsp; &nbsp; In folder /sql are the basic sql scripts for creation and filling the mysql database. If you do not want to &nbsp; &nbsp; &nbsp; &nbsp; waste time, I suggest you tu install xampp, start xampp-control-panel and just start the default mysql instance</br>
</p>

<h3>Profiles</h3>
<h4>dev</h4>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; This profile is permitting all requests, so it does not have login/logout features.</br>
&nbsp; &nbsp; &nbsp; &nbsp; Class DevSecurityInformationService describes hardcoded user and role for simulation</br>
</p>
<h5>Usage</h5>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; Start up spring boot application with profile 'dev'</br>
&nbsp; &nbsp; &nbsp; &nbsp; Open terminal in src/main/react folder and start up the application with 'npm start' command</br>
&nbsp; &nbsp; &nbsp; &nbsp; Ui will run at port 3000 by default and backend at port 80 by default</br>
&nbsp; &nbsp; &nbsp; &nbsp; BACKAND_URL is defined in Common.tsx file</br>
</p>

<h4>test</h4>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; This profile is using the same database as dev, but it does have the login/logout feature</br>
&nbsp; &nbsp; &nbsp; &nbsp; This should be used for testing this kind of features</br>
</p>
<h5>Usage</h5>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; mvn clean install</br>
&nbsp; &nbsp; &nbsp; &nbsp; Start up the final jar with command like this 'C:\dev\Java\jdk-11.0.4\bin\java -Drun.jvmArguments="-Dfile.encoding=UTF-8" -Dspring.profiles.active=test -jar target/app.jar'</br>
&nbsp; &nbsp; &nbsp; &nbsp; Everything should be working as dev, but it is now simulating the application in .jar file with all the prod features</br>
</p>

<h4>prod</h4>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; This profile is using the same database as test, but it has its own production properties</br>
&nbsp; &nbsp; &nbsp; &nbsp; This should be used for production only</br>
</p>
<h5>Usage</h5>
<p>
&nbsp; &nbsp; &nbsp; &nbsp; mvn clean install</br>
&nbsp; &nbsp; &nbsp; &nbsp; Start up the final jar with command like this 'C:\dev\Java\jdk-11.0.4\bin\java -Drun.jvmArguments="-Dfile.encoding=UTF-8" -Dspring.profiles.active=test -jar target/app.jar'</br>
&nbsp; &nbsp; &nbsp; &nbsp; There is also a app.sh bash file which is wrote as init.d service. <b>Pid is not writing well, so stop will not work for now</b></br>
</p>
