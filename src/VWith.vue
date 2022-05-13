<script>
  export default {
    name: "VWith",
    render: (_, ctx) => ctx.scopedSlots.default(ctx.props.variables),
    functional: true,
    props: {
      variables: {
        type: Object,
        required: true
      }
    }
  };
</script>
