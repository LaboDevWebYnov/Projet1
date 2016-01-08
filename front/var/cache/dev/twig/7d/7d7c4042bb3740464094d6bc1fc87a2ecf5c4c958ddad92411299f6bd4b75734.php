<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_2f7057df6a53fb22d5977c6defe825087cdd98c7caf75f43f3e33ba030806138 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_5b9643875f4dfadb041238164ca450108dd528d6379217d2acea052f039285e1 = $this->env->getExtension("native_profiler");
        $__internal_5b9643875f4dfadb041238164ca450108dd528d6379217d2acea052f039285e1->enter($__internal_5b9643875f4dfadb041238164ca450108dd528d6379217d2acea052f039285e1_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5b9643875f4dfadb041238164ca450108dd528d6379217d2acea052f039285e1->leave($__internal_5b9643875f4dfadb041238164ca450108dd528d6379217d2acea052f039285e1_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_ee810b635627fa3ce41b214b46a01e1aae719ebfe95612d03927186d016a34cd = $this->env->getExtension("native_profiler");
        $__internal_ee810b635627fa3ce41b214b46a01e1aae719ebfe95612d03927186d016a34cd->enter($__internal_ee810b635627fa3ce41b214b46a01e1aae719ebfe95612d03927186d016a34cd_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_ee810b635627fa3ce41b214b46a01e1aae719ebfe95612d03927186d016a34cd->leave($__internal_ee810b635627fa3ce41b214b46a01e1aae719ebfe95612d03927186d016a34cd_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_beb79d6d67966bfc3228d6e77e5a356e24d305ee315070eb16c4160c40451d0c = $this->env->getExtension("native_profiler");
        $__internal_beb79d6d67966bfc3228d6e77e5a356e24d305ee315070eb16c4160c40451d0c->enter($__internal_beb79d6d67966bfc3228d6e77e5a356e24d305ee315070eb16c4160c40451d0c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_beb79d6d67966bfc3228d6e77e5a356e24d305ee315070eb16c4160c40451d0c->leave($__internal_beb79d6d67966bfc3228d6e77e5a356e24d305ee315070eb16c4160c40451d0c_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_241e86ed12468acdc4ab1297a8d6f0f837343027b7eae2d4bd3105ebf26ffb89 = $this->env->getExtension("native_profiler");
        $__internal_241e86ed12468acdc4ab1297a8d6f0f837343027b7eae2d4bd3105ebf26ffb89->enter($__internal_241e86ed12468acdc4ab1297a8d6f0f837343027b7eae2d4bd3105ebf26ffb89_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_241e86ed12468acdc4ab1297a8d6f0f837343027b7eae2d4bd3105ebf26ffb89->leave($__internal_241e86ed12468acdc4ab1297a8d6f0f837343027b7eae2d4bd3105ebf26ffb89_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@Twig/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     <link href="{{ absolute_url(asset('bundles/framework/css/exception.css')) }}" rel="stylesheet" type="text/css" media="all" />*/
/* {% endblock %}*/
/* */
/* {% block title %}*/
/*     {{ exception.message }} ({{ status_code }} {{ status_text }})*/
/* {% endblock %}*/
/* */
/* {% block body %}*/
/*     {% include '@Twig/Exception/exception.html.twig' %}*/
/* {% endblock %}*/
/* */
