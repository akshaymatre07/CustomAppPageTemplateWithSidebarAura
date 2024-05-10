({
    // Function to toggle the sidebar collapse/expand state
    toggleSection: function(component, event, helper) {
        // Get the current value of isSidebarCollapsed attribute and toggle it
        component.set('v.isSidebarCollapsed', !component.get('v.isSidebarCollapsed'));
    }
})
