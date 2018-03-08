//Gruntfile.js
module.exports = function(grunt) {

    //Inicializando o objeto de configuração
    grunt.initConfig({

        // Todas as configuraçoẽs de tarefas que vamos definir vão aqui
        // Para concatenar arquivos;
        concat: {
            options: {
                separator: ';',
            },
            javascript: {
                src: ['./src/base/jquery/src/jquery.js','./src/base/bootstrap/dist/js/bootstrap.js','./src/components/frontend.js'],
                dest: './src/components/frontend.js',
            },
        },
        //Para compilar arquivos LESS
        less:{ //comando para compilar "grunt less"
            development: {
                options: {
                    compress: true,  //minifica o resultado
                },
                files: {
                    //compilando frontend.less em frontend.css
                    "./style/frontend.css":"./style/frontend.less",
                    //compilando backend.less em backend.css
                    "./style/backend.css":"./style/backend.less",
                }
            }
        },
        // Para minificar javascript
        uglify: {
            options: {
                mangle: false  // não muda os nomes das funções e variáveis
            },
            dist: {
                files: {
                    '.src/components/frontend.js': '.src/components/frontend.js'
                }
            }
        },
        //Para monitorar alterações nos arquivos
        watch: {
            js: {
                files: ['./src/components/*.*'],   //arquivos monitorados
                tasks: ['concat:javascript','uglify'],     //tarefas executadas
                options: {
                    livereload: true                        //atualiza o navegador
                }
            },
            less: {
                files: ['./src/components/*.*'],  //arquivos monitorados
                tasks: ['less'],                          //tarefas executadas
                options: {
                    livereload: true                        //atualiza o navegador
                }
            }
        }
    });

    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Definição de tarefas
    grunt.registerTask('default', ['watch']);
};