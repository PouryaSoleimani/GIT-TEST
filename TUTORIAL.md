<!-- ???? TUTORIAL.txt -->
<!-- //^GIT TUTORIAL //------------------------->
- git init = MAKING THE .git FOLDER
- git status = SHOW THE PROJECT CURRENT STATUS
- git status -s = SHOW THE PROJECT CURRENT STATUS IN SHORT FORM ( -s == --short )
- U = UNTRACKED
- git add  =  MOVING A FILE OR REPOSITORY TO THE STAGING AREAremote
- git add . = MOVING EVERYTHING TO THE STAGING AREA
- U = UNTRACKED
- A = ADDED
- M = MODIFIED
- git rm --cached <FILENAME> = REMOVE FILE FROM THE STAGING AREA
- git commit = MOVING FILES FROM THE STAGE ARE TO THE REPOSITORY
- git commit -m '...' = M STANTDS FOR MESSAGE ( THE MESSAGE FOR THIS SPECIAL COMMIT )
- git log / git log --oneline = TO LOG OUR CHANGES AND COMMITS DETAILS WITH AN <id> //// --oneline SHOWS US THE LOG IN A SUMMARIZED FORM WITH A SHORTER <id>
- git log --stat = SHOWS THE LOG WITH MORE DETAILS
- git log --graph = SHOWS THE GRAPHICAL LOG AND DEFINES ALSO THE BRANCHES
- git log --before & --after = CAN SPECIFY THE EXTACT DATE OF THE LOGS --> --before"23-10-14"
- git log --author="   " = CAN SEE ONLY ONE AUTHOR LOGS
- git commit -am'THE FAST COMMIT WITHOUT ADDING' = THE -am FLAG COMMITED OUR CHANGES WITHOUT FIRST ADDING TO THE STAGING AREA
- git show <id> = SHOWS US THE CHANGES THAT HAPPENED IN A SPEACIAL COMMIT --> TAKES AN <id> , IF WE DONT GIVE IT AN ID , THE LAST COMMIT WILL BE SHOWN
- git config --local alias.lgo "log --oneline" = HERE WE HAVE MADE A CUSTOMIZED SHORT FORM FOR THE COMMAND "log --online" , CALLED (( lgo )) , SO WRITING (lgo) MEANS log --oneline
<!-- //& BRANCHES IN GIT ----->
- git branch == SHOWS US ALL THE BRANCHES IN OUR PROJECT
- git branch <Branch Name> == CREATE A NEW BRANCH WITH THE NAME WE HAVE WRITTEN AFTER THE WORD 'BRANCH'
- git switch <Branch Name> == SWITCHES BETWEEN OUR BRANCHES , THE DESTINATION IS THE BRANCH WE HAVE WRITTEN ITS NAME
- git switch -c <Branch Name> = FIRST CREATES A BRANCH WITH <Branch Name> THEN SWITCHES TO IT
- git branch -d <Branch Name> = REMOVES A BRANCH (THIS ACTION NEEDS A CONFIRMATION)
- git branch -m < NEW Branch Name> = RENAMES THE BRANCH , ONLY AVAILABLE WHEN WE ARE ALREADY IN THAT BRANCH
- git merge <Branch Name> = MERGING THE DESTINATION BRANCH WITH THE MASTER BRANCH ( SHOULD RUN WHEN WE ARE IN MASTER BRANCH ) << FAST FORWARD MERGE >>

<!-- //* SEMANTIC COMMIT MESSAGES  ---->
feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)

<!--//^ GIT DIFF ---->
- git diff == SHOWING THE DIFFRENCES BETWEEN OUR WORKING DIRECTORY AND THE STAGING AREA
- git diff HEAD == SHOWING THE DIFFRENCES BETWEEN OUR WORKING DIRECTORY AND THE STAGING AREA IN THE CURRENT BRANCH ( MORE )
- git diff <id commit #1> <id commit #2> == COMPARES 2 OF OUR COMMITS AND SHOW THE DIFFRENCES BETWEEN THE 2 COMMITS
- git diff <id branchName 1> <branchName 2> == COMPARES 2 OF OUR BRANCHES AND SHOW THE DIFFRENCES BETWEEN THE 2 BRANCHES

<!--//! GIT IGNORE ---> 
- FIRST WE CREATE A FILE CALLED << .gitignore >> , THEN WE WRITE THE NAME OF THE FILES THAT WE WANT GIT NOT TO TRACK THEM , THISHOW GIT IGNORES THE FILES

<!--//! GIT RESTORE --->
- git restore <FILE NAME> == RESTORE THE CHANGES AND TURN IT BACK TO THE BEFORE
- git restore --staged <FILE NAME> == TAKE THE ONE FILE ON STEP BACKWARD --> FROM STAGING AREA TO WORKING DIRECTORY
- git restore --source <COMMIT ID > <FILE NAME > == TURNS BACK THE FILE WE WANT (FILE NAME) TO THE COMMIT WE WANT (COMMIT ID)

<!-- ! GIT CLEAN -->
- git clean <FILE NAME> == DELETES THE FILE -> HAVE SOME FLAGS ==>

<!-- ! GIT REVERT -->
- git revert <COMMIT ID> == DISCARD THE CHANGES AFTER THE COMMIT ID AND WILL RETURN THE PROJECT TO THE COMMIT STATUS

<!-- ~ GIT MAIN BRANCH -->
- git branch -M main == NAMING THE MASTER OR MAIN BRANCH AS <MAIN>
- git branch -r === SHOWS THE REMOTE BRANCH AFTER FETCHING SOME DATAS    

<!-- * GIT CLONE -->
- git clone <REPOSITIRY ADDRESS>  == DOWNLOADS THE FILES FROM A REPO IN GITHUB.COM AND WE CAN USE THE PROJECT , WE CAN CLONE A REPO IF ONLY ITS PUBLIC

<!-- * GIT REMOTE ADD -->
- git remote add origin <REPOSITORY ADDRESS> == THIS WAY WE CAN ADD OUR PROJECT TO A REPO IN GITHUB.COM

<!-- ! GIT REMOTE REMOVE -->
- git remote remove <REMOTE NAME> == REMOVES OUR REMOTE ( MOSTLY NAMED <<ORIGIN>> ) 

<!-- ^ GIT REMOTE VERBOSE -->
- git remote -v == SHOWS OUR REMOTES WITH A LITTLE DETAILS

<!-- * GIT PUSH -->
- git push -u <REMOTE NAME> <BRANCH NAME> == ADDING OUR FILES TO A REPOSITORY IN GITHUB.COM - (-u ==> MAKE OUR <REMOTE NAME> AND <BRANCH NAME> AS DEFAULT, TO PREVENT REPEATING)
 ---- WE MUST PUSH OUR PROJECT AGAIN , AFTER EVERY CHANGE WE MAKE ...

<!-- & GIT PULL -->
- git pull == DOWNLOADING THE LAST VERSION OF OUR GITHUB REPOSITORY TO SEE THE CHANGES THAT CO WORKERS HAVE DONE , WE MUST PULL EVERYTIME WE WANT TO START WORKING

<!-- ^ GIT FETCH -->
- git fetch <REMOTE NAME(origin)> <BRANCH NAME(main | master)> === FETCHING DATA
*** TO PUSH DATA TO A REPOSITORY FOLLOW THE FOLLOWING STEPS :  
1 - git fetch origin
2 - git push -f origin master

<!-- ? MARKDONW FILES AS (README.md) -->
-- RIGHT CLICK AND CHOOSE OPEN PREVIEW TO SEE THE OUTPUT OF YOUR README.md FILE
# HEADERS == USING # WILL BE CONSIDERED AS h ELEMENTS , # IS h1 AND ## is h2 , ...
<p> WE CAN ALSO USE p TAG IN .md FILES </p>****
___THREE DASH OR UNDERLINES MAKE A hr ELEMENT
USING `` WILL HIGHLIGHT OUR TEXT , LIKE `CODE`
`code`
<!-- ^INLINE CODES -->
USING 3 ``` WILL MAKE A BOX FOR CODES FOR US ``` 
<!-- ^CODES -->
``` javascript

const logger = () =>{console.log('LOG LOG')}
```
<!-- ^ CODES -->
``` json
{
    "firstName" : "Pourya"
}
```
<!-- ^ ORDERED LISTS -->
USING NUMBERS WILL CREATE AN ORDERED LIST ( ol )
1. HTML
2. CSS
3. JS
4. TS
5. REACT
---
<!-- ^ UNORDERED LISTS -->
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
****
<!-- ? WRITING LINKS -->
[LINK-TITLE](LINK-HREF)

[github link](www.github.com)
---

[google](www.google.com)
---

<!-- ! IMAGES -->
![IMAGE-DESC](IMAGE-URL "IMAGE-ALT")

![GITHUB-NINJA-CAT](https://octodex.github.com/images/dojocat.jpg "NINJA CAT") "NINJA CAT"
---
![GITHUB-MINION-CAT](https://octodex.github.com/images/minion.png "MINION-CAT") "MINION CAT"
---

<!-- ^ BADGES  -->
LINKS IN THE BOOKMARKS 
USE readme.so TO EASILY WRITE README.md FILES

****
<!-- & PUBLIC AND PRIVATE REPOSITORIES -->
<!-- & INVITE COLLABORATORS -->
<!-- & PULL REQUESTS -->
<!-- & FORK IN PUBLIC AND OPEN SOURCE PROJECTS -->
<!-- & PUSH AND PULL REQUEST TO AN OPEN SOURCE PROJECT USING CONTRIBUTE FEATURE IN GITHUB -->

<!-- * AMEND -->
- git commit --amend == THIS COMMAND IS USED WHEN WE WANT TO ADD SOME CHANGES TO OUR LAST COMMIT INSTEAD OF COMMITING A NEW ONE
- 
<!-- ^ GIT STASH -->
- git stash == THIS COMMAND IS USED WHEN WE WANT TO SAVE OR SPARE SOME CODES IN ANOTHER PLACE TO COMEBACK AND CONTINUE CODING THEM LATER
- git stash save '<MESSAGE>' == WE CAN SAVE A COMMENT OR MESSAGE IN THE STASH BY THIS COMMAND
- git stash list == SHOWING THE LIST OF STASHES
- git stash pop == POP UP THE CODES IN A STASH AND POUR IT TO THE MASTER BRANCH
- git stash show <STASH ID> == SHOWING THE CODES IN A STASH AND THE DIFF BETWEEN THE STASH AND THE MAIN CODE
  
<!-- ! GIT BLAME  -->
- git blame <FILE NAME> -L <LINES(1,10)> == GIT BLAME ALLOWS US TO KNOW THAT WHO HAVE WRITTEN WHAT CODES IN OUR PROJECT
  
<!-- & GIT BISECT  -->
- git bisect start   
- git bisect good   
- git bisect bad   
- git bisect reset   

<!-- ^ GIT TAG -->
>>> GIT TAG IS USED TO SPECIFY THE VERSION OF OUR APP , WE CAN ADD TAGS TO OUR COMMIT WHEN THE VERSION OF OUR APP CHANGES
- git tag <VERSION NAME> <COMMIT ID> == ADDING A VERSION TO OUR COMMIT ==>(git tag v.1.0.0) , ADDING COMMIT ID IS NOT NECCESSARY , IF WE DONT PASS THE COMMIT ID IT WILL ADD TO THE LATEST COMMIT
- git tag -d <TAG NAME> == DELETING A TAG FROM A COMMIT
- git tag -l === SHOWING THE LIST OF OUR TAGS
- git tag -l <'TAG NAME'> === SEARCHING THE TAG NAME IN THE LIST TAG
- git push origin <TAG NAME> === ADDING A TAG TO OUR GITHUB REPO
- git push origin --tag === ADDING ALL OF OUR TAGS TO OUR GITHUB REPO

<!--* GIT REBASE  -->
>>> GIT REBASE IS USED INSTEAD OF GIT MERGE AND BUT MORE SIMPLE AND WITHOUT ANY EXTRA COMMITS AND BRANCHES
- git rebase <BRANCH NAME> == USE THIS INSTEAD OF (-git merge <BRANCH NAME>) , IT WILL OF COURSE MERGE THE BRANCHES , BUT WITHOUT ANY EXTRA COMMITS
- 


