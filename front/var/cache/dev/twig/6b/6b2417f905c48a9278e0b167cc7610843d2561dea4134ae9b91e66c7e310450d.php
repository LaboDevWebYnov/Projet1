<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_8d0df4163b48bc440bd830f3ecc7b32902d9a5edfe8a1cf0e6bf2a2430f0d880 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_4a70e128e744dc200da635da5e3e85e4e2f22ce2a7f2e32a95be50b0d53f4070 = $this->env->getExtension("native_profiler");
        $__internal_4a70e128e744dc200da635da5e3e85e4e2f22ce2a7f2e32a95be50b0d53f4070->enter($__internal_4a70e128e744dc200da635da5e3e85e4e2f22ce2a7f2e32a95be50b0d53f4070_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_4a70e128e744dc200da635da5e3e85e4e2f22ce2a7f2e32a95be50b0d53f4070->leave($__internal_4a70e128e744dc200da635da5e3e85e4e2f22ce2a7f2e32a95be50b0d53f4070_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_3ad918bb2fc4e0f4ff76204f36559d2fb17c7f77eb5f8fb301a0bd1c34e177ea = $this->env->getExtension("native_profiler");
        $__internal_3ad918bb2fc4e0f4ff76204f36559d2fb17c7f77eb5f8fb301a0bd1c34e177ea->enter($__internal_3ad918bb2fc4e0f4ff76204f36559d2fb17c7f77eb5f8fb301a0bd1c34e177ea_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_3ad918bb2fc4e0f4ff76204f36559d2fb17c7f77eb5f8fb301a0bd1c34e177ea->leave($__internal_3ad918bb2fc4e0f4ff76204f36559d2fb17c7f77eb5f8fb301a0bd1c34e177ea_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_1240df651b4022148dc6191caa8abb157f454e3c86f923e68f4c2d028e20a31f = $this->env->getExtension("native_profiler");
        $__internal_1240df651b4022148dc6191caa8abb157f454e3c86f923e68f4c2d028e20a31f->enter($__internal_1240df651b4022148dc6191caa8abb157f454e3c86f923e68f4c2d028e20a31f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_1240df651b4022148dc6191caa8abb157f454e3c86f923e68f4c2d028e20a31f->leave($__internal_1240df651b4022148dc6191caa8abb157f454e3c86f923e68f4c2d028e20a31f_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_3381c134225cf702342d06d4abc07d2474fef7f3cef1bc8aee2dff0f94f31df8 = $this->env->getExtension("native_profiler");
        $__internal_3381c134225cf702342d06d4abc07d2474fef7f3cef1bc8aee2dff0f94f31df8->enter($__internal_3381c134225cf702342d06d4abc07d2474fef7f3cef1bc8aee2dff0f94f31df8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_3381c134225cf702342d06d4abc07d2474fef7f3cef1bc8aee2dff0f94f31df8->leave($__internal_3381c134225cf702342d06d4abc07d2474fef7f3cef1bc8aee2dff0f94f31df8_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block toolbar %}{% endblock %}*/
/* */
/* {% block menu %}*/
/* <span class="label">*/
/*     <span class="icon">{{ include('@WebProfiler/Icon/router.svg') }}</span>*/
/*     <strong>Routing</strong>*/
/* </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     {{ render(path('_profiler_router', { token: token })) }}*/
/* {% endblock %}*/
/* */
