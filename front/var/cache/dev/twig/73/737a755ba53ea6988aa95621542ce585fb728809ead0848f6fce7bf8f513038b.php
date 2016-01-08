<?php

/* base.html.twig */
class __TwigTemplate_eda5f92ed2a05cd4a2b26a64c7eb487cec871b9ea3b7829c01a01182f418a7a0 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_be82edb0111fd2b754d79ecfdac1f18f23777e2b5beb6369156b53f542acca38 = $this->env->getExtension("native_profiler");
        $__internal_be82edb0111fd2b754d79ecfdac1f18f23777e2b5beb6369156b53f542acca38->enter($__internal_be82edb0111fd2b754d79ecfdac1f18f23777e2b5beb6369156b53f542acca38_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 7
        echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
        ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "    </body>
</html>
";
        
        $__internal_be82edb0111fd2b754d79ecfdac1f18f23777e2b5beb6369156b53f542acca38->leave($__internal_be82edb0111fd2b754d79ecfdac1f18f23777e2b5beb6369156b53f542acca38_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_cb389957fe8bc7f8b87f20d10cc8b411c822fa828a48cdbb7f6afd1ffa5e6fc3 = $this->env->getExtension("native_profiler");
        $__internal_cb389957fe8bc7f8b87f20d10cc8b411c822fa828a48cdbb7f6afd1ffa5e6fc3->enter($__internal_cb389957fe8bc7f8b87f20d10cc8b411c822fa828a48cdbb7f6afd1ffa5e6fc3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_cb389957fe8bc7f8b87f20d10cc8b411c822fa828a48cdbb7f6afd1ffa5e6fc3->leave($__internal_cb389957fe8bc7f8b87f20d10cc8b411c822fa828a48cdbb7f6afd1ffa5e6fc3_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_d857616191c26e54984e412952ee28c89f76c1c0c9600c4e1ba2c1b848b075ea = $this->env->getExtension("native_profiler");
        $__internal_d857616191c26e54984e412952ee28c89f76c1c0c9600c4e1ba2c1b848b075ea->enter($__internal_d857616191c26e54984e412952ee28c89f76c1c0c9600c4e1ba2c1b848b075ea_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_d857616191c26e54984e412952ee28c89f76c1c0c9600c4e1ba2c1b848b075ea->leave($__internal_d857616191c26e54984e412952ee28c89f76c1c0c9600c4e1ba2c1b848b075ea_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_565bde1808c140e24d829d82d9c9d557bc6f52c83143b3d8e7d7f99be5fd6ffd = $this->env->getExtension("native_profiler");
        $__internal_565bde1808c140e24d829d82d9c9d557bc6f52c83143b3d8e7d7f99be5fd6ffd->enter($__internal_565bde1808c140e24d829d82d9c9d557bc6f52c83143b3d8e7d7f99be5fd6ffd_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_565bde1808c140e24d829d82d9c9d557bc6f52c83143b3d8e7d7f99be5fd6ffd->leave($__internal_565bde1808c140e24d829d82d9c9d557bc6f52c83143b3d8e7d7f99be5fd6ffd_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_2433b2993a5ad3a95d146053aadbadd255a1d92d00a391a6cc0fd61e2ddec576 = $this->env->getExtension("native_profiler");
        $__internal_2433b2993a5ad3a95d146053aadbadd255a1d92d00a391a6cc0fd61e2ddec576->enter($__internal_2433b2993a5ad3a95d146053aadbadd255a1d92d00a391a6cc0fd61e2ddec576_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_2433b2993a5ad3a95d146053aadbadd255a1d92d00a391a6cc0fd61e2ddec576->leave($__internal_2433b2993a5ad3a95d146053aadbadd255a1d92d00a391a6cc0fd61e2ddec576_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 11,  82 => 10,  71 => 6,  59 => 5,  50 => 12,  47 => 11,  45 => 10,  38 => 7,  36 => 6,  32 => 5,  26 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html>*/
/*     <head>*/
/*         <meta charset="UTF-8" />*/
/*         <title>{% block title %}Welcome!{% endblock %}</title>*/
/*         {% block stylesheets %}{% endblock %}*/
/*         <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />*/
/*     </head>*/
/*     <body>*/
/*         {% block body %}{% endblock %}*/
/*         {% block javascripts %}{% endblock %}*/
/*     </body>*/
/* </html>*/
/* */
