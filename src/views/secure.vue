<template>
    <div id="secure">
      <sidebar-menu :menu="menu" />
      <router-view />
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {
                menu: [
          {
            header: 'Main Navigation',
            hiddenOnCollapse: true
          },
          {
            href: '/secure',
            title: 'Dashboard',
            icon: 'bi bi-1-circle'
          },
          {
            href: '/login/login',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/secure',
                title: 'Sub Link'
              }
            ]
          }
        ]
            };
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>