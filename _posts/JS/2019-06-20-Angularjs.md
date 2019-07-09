---
layout: post
title: Angularjs
categories: JS

---
2019-06-20-Angularjs.md



    <script type="text/javascript">   - onclick="fnMove('1')"  - > id="div1" 이동
    function fnMove(seq){
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }
    </script>


    <a class="nav-item nav-link" onclick="fnMove('1')" style="cursor:pointer;">프로젝트</a>
    <a class="nav-item nav-link" onclick="fnMove('2')" style="cursor:pointer;">경력</a>
    <a class="nav-item nav-link" onclick="fnMove('3')" style="cursor:pointer;">교육</a>
    <a class="nav-item nav-link" onclick="fnMove('4')" style="cursor:pointer;">관심사</a>

    <section class="jumbotron text-center" id="div1">
    <section class="jumbotron text-center" id="div2">
    <section class="jumbotron text-center" id="div3">
    <section class="jumbotron text-center" id="div4">


- - -


    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="static/script.js"></script>
    // module and controller in the module
    (function () {
        var app = angular.module('project', []);                         // 모듈 정의 함수, 모듈 이름 - project

        app.controller('ProjectCtrl', [ '$scope', function($scope){     // $scope - html, js 연결고리
            $scope.projects = [{
                title: 'Shoppingmall',
                trello: 'a',
                github: 'b'
            },{
                title: 'Patent',
                trello: 'a',
                github: 'b'}
            ];

            $scope.remove = function (project) {                            // ng-click='remove()'
                // find the project data from projects
                var idx = $scope.projects.findIndex(function (item)     // idx = index
                { return item.id == project.id;                         // item은 저장된 project, project는 html 에서 선택된 project
                })

                // remove the project
                if (idx > -1) {                         // 존재할시 -1보다 크므로
                    $scope.projects.splice(idx, 1)}
            };

            $scope.add = function (newProjectTitle, newProjectTrello, newProjectGithub) {     // 3개 변수
            // create a new project
            var newProject = {
                title: newProjectTitle,
                trello: newProjectTrello,
                github: newProjectGithub
            };

            $scope.projects.push(newProject);
            }

            $scope.newProjectTitle = '';
            $scope.newProjectTrello = '';
            $scope.newProjectGithub = '';

        }]);

        app.config(['$interpolateProvider', function($interpolateProvider) {   //   flask jinja2 - {{ }} 같으므로 
          $interpolateProvider.startSymbol('//');
          $interpolateProvider.endSymbol('//');
    }]);
    })();

    <section class="jumbotron text-center" id="div1">
            <div class="container" ng-app="project" ng-controller="ProjectCtrl">
                <h1>프로젝트</h1>
                <div class="line"></div>
                <p></p>
                <button class="btn btn-outline-primary" ng-click="statusFilter={}"> 전체 </button>
                <button class="btn btn-outline-primary" ng-click="statusFilter={title:'Shoppingmall'}"> Shopping mall </button>         <!-- title:'Shoppingmall' - js 에서 그대로 문자열 넣어야함-->
                <button class="btn btn-outline-primary" ng-click="statusFilter={title:'Patent'}"> Patent </button>

                <p></p>
                <ui class='list-unstyled' ng-repeat="project in projects | filter:statusFilter">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Project name, Trello, Giuhub</span>
                      </div>
                      <input type="text" ng-model="project.title" aria-label="Project name" class="form-control">
                      <input type="text" ng-model="project.trello" aria-label="Trello" class="form-control">
                      <input type="text" ng-model="project.github" aria-label="Github" class="form-control">
                      <button class="btn btn-outline-danger" type="button" ng-click="remove(project)">삭제</button>

                    </div>
                    <p></p>
                    <p>프로젝트 사진</p>

                </ui>

            <form name="project" ng-submit="add(newProjectTitle, newProjectTrello, newProjectGithub)">
               <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Project name, Trello, Giuhub</span>
                      </div>
                      <input type="text" ng-model="newProjectTitle" aria-label="Project name" class="form-control" placeholder="New project">
                      <input type="text" ng-model="newProjectTrello" aria-label="Trello" class="form-control"  placeholder="Trello">
                      <input type="text" ng-model="newProjectGithub" aria-label="Github" class="form-control"  placeholder="Github">
                      <button class="btn btn-outline-success" type="submit" ng-click="">추가</button>
               </div>
            </form>
            </div>
        </section>
